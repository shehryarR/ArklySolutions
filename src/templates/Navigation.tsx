import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledNavigation = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.primary.dark};
  backdrop-filter: ${({ theme }) => theme.effects.backdropBlur};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
`

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[4]};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  }
`

interface NavigationProps {
  currentPage?: 'home' | 'services' | 'about' | 'contact'
}

const Navigation: React.FC<NavigationProps> = ({ currentPage = 'home' }) => {
  const handleLogoClick = () => {
    window.location.href = '/'
  }

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
              // Fallback to text if image fails to load
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

        <NavLinks>
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
        </NavLinks>
      </NavContainer>
    </StyledNavigation>
  )
}

export default Navigation