/**
 * Kick Live Popup - React Component
 * Automatically shows a floating popup when your Kick streamer goes live
 */

'use client';

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// Types
interface KickLivePopupContextType {
  isLive: boolean;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  checkStreamStatus: () => Promise<void>;
  channel: string;
}

interface KickLivePopupProviderProps {
  children: ReactNode;
  channel: string;
  checkInterval?: number;
  defaultPosition?: { x: 'left' | 'right'; y: 'top' | 'bottom' };
  defaultOffset?: { x: number; y: number };
  autoShow?: boolean;
  draggable?: boolean;
  hideOnMobile?: boolean;
  storageKey?: string;
}

interface KickLivePopupProps {
  className?: string;
}

// Context
const KickLivePopupContext = createContext<KickLivePopupContextType | undefined>(undefined);

const useKickLivePopup = () => {
  const context = useContext(KickLivePopupContext);
  if (!context) {
    throw new Error('useKickLivePopup must be used within KickLivePopupProvider');
  }
  return context;
};

// Provider Component
export const KickLivePopupProvider: React.FC<KickLivePopupProviderProps> = ({
  children,
  channel,
  checkInterval = 30000,
  defaultPosition = { x: 'right', y: 'bottom' },
  defaultOffset = { x: 24, y: 24 },
  autoShow = true,
  draggable = true,
  hideOnMobile = true,
  storageKey = 'kickLivePopup'
}) => {
  const [isLive, setIsLive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Load saved muted state
  useEffect(() => {
    try {
      const savedMuted = localStorage.getItem(`${storageKey}_muted`);
      if (savedMuted !== null) {
        setIsMuted(savedMuted === 'true');
      }
    } catch (e) {
      console.warn('KickLivePopup: Error loading muted state', e);
    }
  }, [storageKey]);

  // Save muted state
  useEffect(() => {
    try {
      localStorage.setItem(`${storageKey}_muted`, isMuted.toString());
    } catch (e) {
      console.warn('KickLivePopup: Error saving muted state', e);
    }
  }, [isMuted, storageKey]);

  // Check stream status
  const checkStreamStatus = async () => {
    try {
      const response = await fetch(`https://kick.com/api/v1/channels/${channel}`);
      if (response.ok) {
        const data = await response.json();
        const liveStatus = data.livestream && data.livestream.is_live;
        setIsLive(liveStatus);
      } else {
        setIsLive(false);
      }
    } catch (error) {
      console.error('KickLivePopup: Error checking stream status', error);
      setIsLive(false);
    }
  };

  // Start polling
  useEffect(() => {
    checkStreamStatus();
    const interval = setInterval(checkStreamStatus, checkInterval);
    return () => clearInterval(interval);
  }, [channel, checkInterval]);

  const value: KickLivePopupContextType = {
    isLive,
    isMuted,
    setIsMuted,
    checkStreamStatus,
    channel,
  };

  return (
    <KickLivePopupContext.Provider value={value}>
      {children}
    </KickLivePopupContext.Provider>
  );
};

// Popup Component - Global minimized version for all pages
const KickLivePopup: React.FC<KickLivePopupProps> = ({ className = '' }) => {
  const { isLive, isMuted, setIsMuted, channel } = useKickLivePopup();
  const [isMinimized, setIsMinimized] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent) ||
             window.innerWidth <= 768;
    }
    return false;
  });
  const [hasManualInteraction, setHasManualInteraction] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isOnMainPage = pathname === '/';

  // Reset position to default (bottom-right) - defined early so it can be used in useEffect
  const resetPosition = () => {
    if (typeof window !== 'undefined') {
      const x = window.innerWidth - 480 - 24;
      const y = window.innerHeight - 270 - 24;
      setPosition({ x, y });
    }
  };

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent) ||
                     window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load saved state
  useEffect(() => {
    try {
      const savedClosed = localStorage.getItem('kickLivePopup_closed');
      if (savedClosed === 'true') {
        setIsClosed(true);
        return;
      }
      
      const savedMinimized = localStorage.getItem('kickLivePopup_minimized');
      const savedFloating = localStorage.getItem('kickLivePopup_floating');
      const savedManualInteraction = localStorage.getItem('kickLivePopup_manualInteraction');
      const savedPosition = localStorage.getItem('kickLivePopup_position');

      const isFreshLoad = savedManualInteraction !== 'true';
      if (isFreshLoad) {
        localStorage.removeItem('kickLivePopup_minimized');
        localStorage.removeItem('kickLivePopup_floating');
        localStorage.removeItem('kickLivePopup_manualInteraction');
        localStorage.removeItem('kickLivePopup_position');
      } else {
        if (savedMinimized === 'true' && savedManualInteraction === 'true') {
          setIsMinimized(true);
          setShowFloating(true);
        }
        if (savedManualInteraction === 'true') {
          setHasManualInteraction(true);
        }
        if (savedPosition) {
          setPosition(JSON.parse(savedPosition));
        } else {
          resetPosition();
        }
      }
    } catch (e) {
      console.warn('KickLivePopup: Error loading state', e);
      resetPosition();
    }
  }, []);

  // Reset closed state when stream goes offline and back online
  useEffect(() => {
    if (!isLive && isClosed) {
      // Stream went offline, reset closed state
      setIsClosed(false);
      localStorage.removeItem('kickLivePopup_closed');
    }
  }, [isLive, isClosed]);

  // Save position
  useEffect(() => {
    if (isMinimized || showFloating) {
      try {
        localStorage.setItem('kickLivePopup_position', JSON.stringify(position));
      } catch (e) {
        console.warn('KickLivePopup: Error saving position', e);
      }
    }
  }, [position, isMinimized, showFloating]);

  // Auto-position for different pages and auto-show on non-home pages
  useEffect(() => {
    if (isOnMainPage) {
      // Never show minimized popup on home page
      setShowFloating(false);
      setIsMinimized(false);
      return;
    }
    
    if (!isOnMainPage && isLive && !isMobile && !isClosed) {
      setShowFloating(true);
      resetPosition();
    }
  }, [isOnMainPage, isLive, isMobile, isClosed]);

  // Update position on window resize
  useEffect(() => {
    if (isMinimized || showFloating || (!isOnMainPage && isLive)) {
      const updatePosition = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        setPosition({ x: windowWidth - 480 - 24, y: windowHeight - 270 - 24 });
      };
      updatePosition();
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [isMinimized, showFloating, isOnMainPage, isLive]);

  // Constrain position
  const constrainPosition = (x: number, y: number) => {
    const maxX = window.innerWidth - 480;
    const maxY = window.innerHeight - 270;
    return {
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY))
    };
  };

  // Snap to edges
  const snapToEdges = (x: number, y: number) => {
    const snapThreshold = 50;
    let newX = x;
    let newY = y;

    if (x < snapThreshold) {
      newX = 0;
    } else if (x > window.innerWidth - 480 - snapThreshold) {
      newX = window.innerWidth - 480;
    }

    if (y < snapThreshold) {
      newY = 0;
    } else if (y > window.innerHeight - 270 - snapThreshold) {
      newY = window.innerHeight - 270;
    }

    return { x: newX, y: newY };
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.popup-button')) {
      return;
    }

    setIsDragging(true);
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      let newX = e.clientX - dragOffset.x;
      let newY = e.clientY - dragOffset.y;

      const constrained = constrainPosition(newX, newY);
      setPosition(constrained);
    };

    const handleMouseUp = () => {
      if (isDragging) {
        const snapped = snapToEdges(position.x, position.y);
        setPosition(snapped);
        setIsDragging(false);
        // Save state after dragging
        localStorage.setItem('kickLivePopup_minimized', isMinimized ? 'true' : 'false');
        localStorage.setItem('kickLivePopup_floating', showFloating ? 'true' : 'false');
        localStorage.setItem('kickLivePopup_manualInteraction', 'true');
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, position, isMinimized, showFloating]);

  // Handle minimize button click (for home page big version)
  const handleMinimize = () => {
    setIsMinimized(true);
    setShowFloating(true);
    setHasManualInteraction(true);
    resetPosition();
    localStorage.setItem('kickLivePopup_minimized', 'true');
    localStorage.setItem('kickLivePopup_floating', 'true');
    localStorage.setItem('kickLivePopup_manualInteraction', 'true');
  };

  // Only show if live and not on home page (home page has its own big version)
  // OR if minimized/floating
  const shouldShowMinimized = (!isOnMainPage && isLive && !isClosed) || ((isMinimized || showFloating) && !isClosed);

  if (!isLive || isMobile || isOnMainPage || isClosed || !shouldShowMinimized) {
    return null;
  }

  const handleExpand = () => {
    if (typeof window !== 'undefined') {
      // Navigate to home page to see full screen
      window.location.href = '/';
      setIsMuted(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`kick-live-popup ${isDragging ? 'dragging' : ''} ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="popup-container">
        <div className="popup-controls">
          <button
            className="popup-button expand-button"
            onClick={(e) => {
              e.stopPropagation();
              handleExpand();
            }}
            title="Expand to full screen"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="popup-button close-button"
            onClick={(e) => {
              e.stopPropagation();
              setIsClosed(true);
              setShowFloating(false);
              setIsMinimized(false);
              setIsMuted(true);
              setHasManualInteraction(false);
              localStorage.setItem('kickLivePopup_minimized', 'false');
              localStorage.setItem('kickLivePopup_floating', 'false');
              localStorage.setItem('kickLivePopup_manualInteraction', 'false');
              localStorage.setItem('kickLivePopup_closed', 'true');
            }}
            title="Close"
          >
            <div className="relative w-3 h-3">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45 origin-center"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45 origin-center"></div>
            </div>
          </button>
        </div>
        <div className="popup-iframe-container">
          <iframe
            src={`https://player.kick.com/${channel}${isMuted ? '?muted=true' : ''}`}
            allowFullScreen
            title="Kick Stream"
          />
        </div>
      </div>
    </div>
  );
};

// Export both provider and component
export default KickLivePopup;

// Also export as named exports for convenience
export { KickLivePopup, useKickLivePopup };
