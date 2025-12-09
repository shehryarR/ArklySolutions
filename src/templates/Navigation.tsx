import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const StyledNavigation = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.primary.dark};
  backdrop-filter: ${({ theme }) => theme.effects.backdropBlur};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  }
`

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.dropdown};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 36px;
    height: 36px;
  }
`

const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`

// Desktop Navigation
const DesktopNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
  transition: all ${({ theme }) => theme.transitions.default};

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: ${({ theme }) => theme.spacing[4]};
    right: ${({ theme }) => theme.spacing[4]};
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.accent};
    transform: scaleX(0);
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent};
    background: rgba(37, 99, 235, 0.1);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary.accent};
    background: rgba(37, 99, 235, 0.15);
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  &.active::after {
    transform: scaleX(1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  }
`

// Mobile Menu Button
interface MobileMenuButtonProps {
  $isOpen: boolean;
}

const MobileMenuButton = styled(motion.button)<MobileMenuButtonProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }

  span {
    width: 24px;
    height: 3px;
    background: ${({ theme }) => theme.colors.neutral.white};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    transform-origin: 1px;
    transition: all ${({ theme }) => theme.transitions.fast};

    &:first-child {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
      transform: ${({ $isOpen }) => $isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

// Mobile Menu Overlay
const MobileMenuOverlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 35, 50, 0.95);
  backdrop-filter: blur(8px);
  z-index: ${({ theme }) => theme.zIndex.overlay};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(400px, 85vw);
  background: ${({ theme }) => theme.colors.primary.dark};
  box-shadow: ${({ theme }) => theme.shadows['2xl']};
  padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[8]};
  overflow-y: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
`

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`

const MobileNavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: all ${({ theme }) => theme.transitions.default};
  border: 1px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent};
    background: rgba(37, 99, 235, 0.1);
    border-color: rgba(37, 99, 235, 0.3);
    transform: translateX(8px);
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary.accent};
    background: rgba(37, 99, 235, 0.15);
    border-color: ${({ theme }) => theme.colors.primary.accent};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`

const MobileContactInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing[12]};
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const ContactTitle = styled.h4`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.neutral.gray[300]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
`

const ContactIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.base};
  flex-shrink: 0;
`

// Animation variants - FIXED: Removed invalid cubic-bezier
const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: '0%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

const staggerContainer = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const linkVariants = {
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'  // FIXED: Changed from invalid cubic-bezier to valid easing
    }
  }
}

interface NavigationProps {
  currentPage?: 'home' | 'services' | 'about' | 'contact'
}

const Navigation: React.FC<NavigationProps> = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogoClick = () => {
    window.location.href = '/'
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  const handleMobileLinkClick = (href: string) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      window.location.href = href
    }, 300)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <StyledNavigation
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={handleLogoClick}
        >
          <LogoImage 
            src="/logo.svg" 
            alt="Arkly Solutions Logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.style.display = 'flex';
              }
            }}
          />
          <div style={{ 
            display: 'none',
            width: '40px', 
            height: '40px',
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            borderRadius: '16px',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>A</div>
          <LogoText>Arkly Solutions</LogoText>
        </Logo>

        {/* Desktop Navigation */}
        <DesktopNavLinks>
          <NavLink 
            href="/" 
            className={currentPage === 'home' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </NavLink>
          <NavLink 
            href="/services" 
            className={currentPage === 'services' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Services
          </NavLink>
          <NavLink 
            href="/about" 
            className={currentPage === 'about' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </NavLink>
          <NavLink 
            href="/contact" 
            className={currentPage === 'contact' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </NavLink>        
        </DesktopNavLinks>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          $isOpen={isMenuOpen}
          onClick={handleMenuToggle}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </MobileMenuButton>
      </NavContainer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <MobileMenuOverlay
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={handleMenuClose}
            />
            <MobileMenu
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                variants={staggerContainer}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <MobileNavLinks>
                  <MobileNavLink
                    href="/"
                    className={currentPage === 'home' ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMobileLinkClick('/')
                    }}
                    variants={linkVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Home
                  </MobileNavLink>
                  <MobileNavLink
                    href="/services"
                    className={currentPage === 'services' ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMobileLinkClick('/services')
                    }}
                    variants={linkVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Services
                  </MobileNavLink>
                  <MobileNavLink
                    href="/about"
                    className={currentPage === 'about' ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMobileLinkClick('/about')
                    }}
                    variants={linkVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    About
                  </MobileNavLink>
                  <MobileNavLink
                    href="/contact"
                    className={currentPage === 'contact' ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMobileLinkClick('/contact')
                    }}
                    variants={linkVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact
                  </MobileNavLink>
                </MobileNavLinks>

                <motion.div variants={linkVariants}>
                  <MobileContactInfo>
                    <ContactTitle>Get In Touch</ContactTitle>
                    <ContactItem>
                      <ContactIcon>📧</ContactIcon>
                      <span>contact@arklysolutions.com</span>
                    </ContactItem>
                    <ContactItem>
                      <ContactIcon>📞</ContactIcon>
                      <span>(786) 548-8584</span>
                    </ContactItem>
                    <ContactItem>
                      <ContactIcon>⏰</ContactIcon>
                      <span>Mon-Fri: 9 AM - 6 PM EST</span>
                    </ContactItem>
                  </MobileContactInfo>
                </motion.div>
              </motion.div>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </StyledNavigation>
  )
}

export default Navigation