import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledNavigation = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[10]};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  box-shadow: ${({ theme }) => theme.shadows['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[6]};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  }
`

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: color ${({ theme }) => theme.transitions.default};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.accent};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary.accent};
  }

  &.active::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`

interface NavigationProps {
  currentPage?: 'home' | 'services' | 'about' | 'contact'
}

const Navigation: React.FC<NavigationProps> = ({ currentPage = 'home' }) => {
  return (
    <StyledNavigation
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavLink href="/" className={currentPage === 'home' ? 'active' : ''}>
        Home
      </NavLink>
      <NavLink href="/services" className={currentPage === 'services' ? 'active' : ''}>
        Services
      </NavLink>
      <NavLink href="/about" className={currentPage === 'about' ? 'active' : ''}>
        About
      </NavLink>
      <NavLink href="/contact" className={currentPage === 'contact' ? 'active' : ''}>
        Contact
      </NavLink>
    </StyledNavigation>
  )
}

export default Navigation