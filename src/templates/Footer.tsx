import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  Clock,
  Globe
} from 'lucide-react'

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[8]};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[14]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  }
`

const FooterContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
`

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[12]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
    margin-bottom: ${({ theme }) => theme.spacing[10]};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[2]};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
`

const LogoImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 40px;
    height: 40px;
  }
`

const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[300]};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  max-width: 300px;
  font-size: ${({ theme }) => theme.fontSizes.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: none;
    margin: 0 auto ${({ theme }) => theme.spacing[4]} auto;
  }
`

const SectionTitle = styled.h4`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
`

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[2]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.gray[300]};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent};
    transform: translateX(4px);
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.accent};
    transition: width ${({ theme }) => theme.transitions.default};
  }
  
  &:hover::before {
    width: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &:hover {
      transform: none;
    }
    
    &::before {
      display: none;
    }
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.neutral.gray[300]};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    gap: ${({ theme }) => theme.spacing[2]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`

const ContactIcon = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(37, 99, 235, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary.accent};

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 28px;
    height: 28px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 24px;
    height: 24px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const FooterBottom = styled.div`
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: ${({ theme }) => theme.spacing[6]};
    gap: ${({ theme }) => theme.spacing[3]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
    padding-top: ${({ theme }) => theme.spacing[4]};
    gap: ${({ theme }) => theme.spacing[3]};
  }
`

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.neutral.gray[400]};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    order: 2;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[3]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    order: 1;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(37, 99, 235, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral.white};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.default};
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary.accent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover {
      transform: none;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTop>
          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo>
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
                width: '48px', 
                height: '48px',
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                borderRadius: '16px',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>A</div>
              <LogoText>Arkly Solutions LLC</LogoText>
            </Logo>
            <FooterDescription>
              Transforming businesses through innovative technology solutions, 
              expert financial management, and strategic consulting.
            </FooterDescription>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <Mail />
                </ContactIcon>
                <span>contact@arklysolutions.com</span>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <Phone />
                </ContactIcon>
                <span>(786) 548-8584</span>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <Clock />
                </ContactIcon>
                <span>Mon-Fri: 9 AM - 6 PM EST</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionTitle>Services</SectionTitle>
            <FooterLinks>
              <li><FooterLink href="/services">Custom Software</FooterLink></li>
              <li><FooterLink href="/services">Financial Management</FooterLink></li>
              <li><FooterLink href="/services">Process Automation</FooterLink></li>
              <li><FooterLink href="/services">Business Consulting</FooterLink></li>
              <li><FooterLink href="/services">Data Analytics</FooterLink></li>
              <li><FooterLink href="/services">Security & Compliance</FooterLink></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle>Company</SectionTitle>
            <FooterLinks>
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/about">Our Story</FooterLink></li>
              <li><FooterLink href="/about">Values</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
              <li><FooterLink href="/contact">Free Consultation</FooterLink></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionTitle>Resources</SectionTitle>
            <FooterLinks>
              <li><FooterLink href="/services">Case Studies</FooterLink></li>
              <li><FooterLink href="/about">Client Success</FooterLink></li>
              <li><FooterLink href="/contact">Get Quote</FooterLink></li>
              <li><FooterLink href="/services">Tech Stack</FooterLink></li>
              <li><FooterLink href="/about">Support</FooterLink></li>
            </FooterLinks>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © 2025 Arkly Solutions LLC. All rights reserved.
          </Copyright>
          
          <SocialLinks>
            <SocialLink
              href="mailto:contact@arklysolutions.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail />
            </SocialLink>
            <SocialLink
              href="https://arklysolutions.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe />
            </SocialLink>
            <SocialLink
              href="tel:+17865488584"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone />
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer