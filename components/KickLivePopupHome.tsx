/**
 * Kick Live Popup - Home Page Big Version
 * Shows full-screen stream on home page
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useKickLivePopup } from './KickLivePopup';

interface KickLivePopupHomeProps {
  className?: string;
}

const KickLivePopupHome: React.FC<KickLivePopupHomeProps> = ({ className = '' }) => {
  const { isLive, isMuted, setIsMuted, channel } = useKickLivePopup();
  const [showFloating, setShowFloating] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFloatingClosed, setIsFloatingClosed] = useState(false);
  const [floatingPosition, setFloatingPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasManualInteraction, setHasManualInteraction] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const mainStreamRef = useRef<HTMLDivElement>(null);

  // Load saved state
  useEffect(() => {
    const savedClosed = localStorage.getItem('kickLivePopup_home_closed');
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
        try {
          setFloatingPosition(JSON.parse(savedPosition));
        } catch {}
      } else {
        resetPosition();
      }
    }
  }, []);

  // Reset closed state when stream goes offline and back online
  useEffect(() => {
    if (!isLive && isClosed) {
      // Stream went offline, reset closed state
      setIsClosed(false);
      localStorage.removeItem('kickLivePopup_home_closed');
    }
  }, [isLive, isClosed]);

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

  // Scroll detection - auto minimize when scrolling past
  useEffect(() => {
    const handleScroll = () => {
      if (!mainStreamRef.current || isMobile) return;
      const mainStreamBottom = mainStreamRef.current.getBoundingClientRect().bottom;
      if (isLive && !isFloatingClosed && !hasManualInteraction && mainStreamBottom < 0) {
        setShowFloating(true);
      } else if (!isMinimized && !hasManualInteraction) {
        setShowFloating(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLive, isMinimized, isFloatingClosed, hasManualInteraction, isMobile]);

  // Reset position
  const resetPosition = () => {
    const x = window.innerWidth - 480 - 24;
    const y = window.innerHeight - 270 - 24;
    setFloatingPosition({ x, y });
  };

  // Position update on resize
  useEffect(() => {
    if (isMinimized || showFloating) {
      const updatePosition = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        setFloatingPosition({ x: windowWidth - 480 - 24, y: windowHeight - 270 - 24 });
      };
      updatePosition();
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [isMinimized, showFloating]);

  // Save position
  useEffect(() => {
    if (isMinimized || showFloating) {
      localStorage.setItem('kickLivePopup_position', JSON.stringify(floatingPosition));
    }
  }, [floatingPosition, isMinimized, showFloating]);

  // Dragging handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.popup-button')) return;
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    let newX = e.clientX - dragOffset.x;
    let newY = e.clientY - dragOffset.y;
    const maxX = window.innerWidth - 480;
    const maxY = window.innerHeight - 270;
    setFloatingPosition({ x: Math.max(0, Math.min(newX, maxX)), y: Math.max(0, Math.min(newY, maxY)) });
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const embedWidth = 480;
      const embedHeight = 270;
      let snappedX = floatingPosition.x;
      let snappedY = floatingPosition.y;
      if (floatingPosition.x < 50) snappedX = 0;
      else if (floatingPosition.x > windowWidth - embedWidth - 50) snappedX = windowWidth - embedWidth;
      if (floatingPosition.y < 50) snappedY = 0;
      else if (floatingPosition.y > windowHeight - embedHeight - 50) snappedY = windowHeight - embedHeight;
      setFloatingPosition({ x: snappedX, y: snappedY });
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, floatingPosition]);

  if (!isLive || isMobile || isClosed) return null;

  const isMinimizedMode = isMinimized || showFloating;
  const shouldShowBigScreen = !isMinimizedMode;
  const shouldShowMinimized = isMinimizedMode;

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden bg-black shadow-[0_8px_32px_rgba(0,0,0,0.6)] ${
        shouldShowMinimized
          ? 'fixed z-50 w-[480px] h-[270px] rounded-lg shadow-2xl cursor-move'
          : 'relative w-full max-w-7xl mx-auto mb-8 rounded-xl'
      } ${className}`}
      style={{
        left: shouldShowMinimized ? floatingPosition.x : 'auto',
        top: shouldShowMinimized ? floatingPosition.y : 'auto',
        cursor: shouldShowMinimized ? (isDragging ? 'grabbing' : 'grab') : 'default'
      }}
      onMouseDown={shouldShowMinimized ? handleMouseDown : undefined}
      ref={shouldShowBigScreen ? mainStreamRef : undefined}
    >
      <div className="relative w-full h-full">
        {shouldShowBigScreen && (
          <>
            <button
              onClick={() => {
                setIsMinimized(true);
                setShowFloating(true);
                setHasManualInteraction(true);
                localStorage.setItem('kickLivePopup_minimized', 'true');
                localStorage.setItem('kickLivePopup_floating', 'true');
                localStorage.setItem('kickLivePopup_manualInteraction', 'true');
              }}
              className="absolute top-2 right-12 z-10 bg-black/80 text-white rounded w-8 h-8 flex items-center justify-center hover:bg-black transition-colors"
              title="Minimize"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => {
                setIsClosed(true);
                setIsMinimized(false);
                setShowFloating(false);
                setIsMuted(true);
                setHasManualInteraction(false);
                localStorage.setItem('kickLivePopup_home_closed', 'true');
                localStorage.setItem('kickLivePopup_minimized', 'false');
                localStorage.setItem('kickLivePopup_floating', 'false');
                localStorage.setItem('kickLivePopup_manualInteraction', 'false');
              }}
              className="absolute top-2 right-2 z-10 bg-black/80 text-white rounded w-8 h-8 flex items-center justify-center hover:bg-black transition-colors"
              title="Close"
            >
              <div className="relative w-4 h-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45 origin-center"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45 origin-center"></div>
              </div>
            </button>
          </>
        )}

        {shouldShowMinimized && (
          <>
            <button
              onClick={() => {
                setIsClosed(true);
                setShowFloating(false);
                setIsFloatingClosed(true);
                setIsMinimized(false);
                setIsMuted(true);
                setHasManualInteraction(false);
                localStorage.setItem('kickLivePopup_home_closed', 'true');
                localStorage.setItem('kickLivePopup_minimized', 'false');
                localStorage.setItem('kickLivePopup_floating', 'false');
                localStorage.setItem('kickLivePopup_manualInteraction', 'false');
              }}
              className="absolute top-2 right-2 z-10 bg-black/80 text-white rounded w-6 h-6 flex items-center justify-center hover:bg-black transition-colors"
              title="Close"
            >
              <div className="relative w-3 h-3">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45 origin-center"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45 origin-center"></div>
              </div>
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  setIsMinimized(false);
                  setShowFloating(false);
                  setIsFloatingClosed(false);
                  setHasManualInteraction(true);
                  localStorage.setItem('kickLivePopup_minimized', 'false');
                  localStorage.setItem('kickLivePopup_floating', 'false');
                  localStorage.setItem('kickLivePopup_manualInteraction', 'true');
                }, 500);
              }}
              className="absolute top-2 left-2 z-10 bg-black/80 text-white rounded w-6 h-6 flex items-center justify-center hover:bg-black transition-colors"
              title="Expand to full screen"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <iframe
            src={`https://player.kick.com/${channel}${isMuted ? '?muted=true' : ''}`}
            width="100%"
            height="100%"
            allowFullScreen
            className="w-full h-full"
            title="Kick Stream"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default KickLivePopupHome;

