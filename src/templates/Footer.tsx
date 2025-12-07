import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => theme.spacing[16]};
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const FooterLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.white};
  opacity: 0.8;
  transition: opacity ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.neutral.white};
  opacity: 0.8;
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterLinks>
        <Copyright>
          © 2025 Arkly Solutions LLC. All rights reserved.
        </Copyright>
      </FooterContent>
    </StyledFooter>
  )
}

export default Footer