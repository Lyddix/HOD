export interface Casino {
  id: string
  name: string
  logo: string
  banner1: string
  banner2: string
  rating: number
  bonus: string
  features: string[]
  url: string
  description?: string
  license?: string
  welcomeOffer?: string
  borderColor?: string // Border color matching the casino's theme
  glowColor?: string // Glow/shadow color matching the casino's theme
}

