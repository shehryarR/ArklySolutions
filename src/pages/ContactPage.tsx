import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { PageLayout } from '../templates'
import { 
  Mail, 
  Phone, 
  Calendar, 
  Clock,
  Zap
} from 'lucide-react'

// Hero Section
const HeroSection = styled(motion.section)`
  position: relative;
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[16]};
  background: ${({ theme }) => theme.colors.gradients.hero};
  color: ${({ theme }) => theme.colors.neutral.white};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(37, 99, 235, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(124, 58, 237, 0.2) 0%, transparent 50%);
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[12]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[10]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  }
`

const HeroContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2rem, 4vw, 3.75rem);
  font-weight: ${({ theme }) => theme.fontWeights.black};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.serif};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: none;
  }
`

// Main Section
const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[4]};
  }
`

const ContactContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[12]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[8]};
  }
`

// Full Width Header Section
const FullWidthHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`

const InfoTitle = styled.h2`
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
`

const InfoDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  max-width: 800px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.serif};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: none;
  }
`

// Two Column Layout for Contact Cards and Form
const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[16]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[12]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[8]};
  }
`

// Contact Info Side
const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[3]};
  }
`

const ContactCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.neutral.gray[200]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.primary.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[6]};
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing[3]};

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    gap: ${({ theme }) => theme.spacing[2]};
  }
`

const ContactIcon = styled.div`
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.gradients.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: white;

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 56px;
    height: 56px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 48px;
    height: 48px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const ContactDetails = styled.div`
  flex: 1;
`

const ContactLabel = styled.h3`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.text};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.fontSizes.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing[1]};
  }
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.accent};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: color ${({ theme }) => theme.transitions.default};
  word-break: break-all;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent2};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`

// Contact Form Side
const FormContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ theme }) => theme.spacing[12]};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.neutral.gray[200]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[8]};
    border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[6]};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }
`

const FormTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 1.875rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.text};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing[1]};
    text-align: center;
  }
`

const FormSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSizes.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    text-align: center;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[5]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[3]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.neutral.text};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`

const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  border: 2px solid ${({ theme }) => theme.colors.neutral.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: all ${({ theme }) => theme.transitions.default};
  background: ${({ theme }) => theme.colors.neutral.gray[50]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.accent};
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    background: ${({ theme }) => theme.colors.neutral.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.gray[400]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]};
  }
`

const FormTextarea = styled.textarea`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  border: 2px solid ${({ theme }) => theme.colors.neutral.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 140px;
  resize: vertical;
  transition: all ${({ theme }) => theme.transitions.default};
  background: ${({ theme }) => theme.colors.neutral.gray[50]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.accent};
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    background: ${({ theme }) => theme.colors.neutral.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.gray[400]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    min-height: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]};
    min-height: 100px;
  }
`

const SubmitButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.gradients.accent};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  &:hover::before {
    left: 100%;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  }
`

// Full Width Response Guarantee Section
const FullWidthGuarantee = styled(motion.div)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[16]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: ${({ theme }) => theme.spacing[12]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ theme }) => theme.spacing[8]};
  }
`

const GuaranteeCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.gradients.surface};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[8]};
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
    max-width: none;
  }
`

const GuaranteeTitle = styled.h3`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.heading};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const GuaranteeText = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin: 0;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.5;
  }
`

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
}

// Data with professional icons
const contactData = [
  {
    icon: Mail,
    label: "Email",
    text: "Ready to discuss your project?",
    link: "contact@arklysolutions.com",
    href: "mailto:contact@arklysolutions.com"
  },
  {
    icon: Phone, 
    label: "Phone",
    text: "Call us for immediate assistance",
    link: "(786) 548-8584",
    href: "tel:+17865488584"
  },
  {
    icon: Calendar,
    label: "Free Consultation",
    text: "Get expert advice at no cost",
    link: "Schedule a discovery call",
    href: "mailto:contact@arklysolutions.com?subject=Free Consultation Request"
  },
  {
    icon: Clock,
    label: "Response Time",
    text: "We typically respond within 24 hours",
    link: "Business Hours: 9 AM - 6 PM EST",
    href: null
  }
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <PageLayout currentPage="contact">
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroContainer>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Something Great
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your business? Let's start the conversation and create solutions that drive real results.
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ContactSection>
        <ContactContainer>
          {/* Full Width Header Section */}
          <FullWidthHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <InfoTitle>Get In Touch</InfoTitle>
            <InfoDescription>
              Whether you're looking to streamline operations, build custom software, 
              or need expert financial management, we're here to help turn your vision into reality.
            </InfoDescription>
          </FullWidthHeader>

          {/* Two Column Section: Contact Cards and Form */}
          <TwoColumnSection>
            <ContactInfo
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {contactData.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <ContactCard
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ContactIcon>
                      <IconComponent />
                    </ContactIcon>
                    <ContactDetails>
                      <ContactLabel>{contact.label}</ContactLabel>
                      <ContactText>{contact.text}</ContactText>
                      {contact.href ? (
                        <ContactLink href={contact.href}>{contact.link}</ContactLink>
                      ) : (
                        <ContactText style={{ fontWeight: 600, color: '#1a2332' }}>
                          {contact.link}
                        </ContactText>
                      )}
                    </ContactDetails>
                  </ContactCard>
                )
              })}
            </ContactInfo>

            <FormContainer
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FormTitle>Send Us a Message</FormTitle>
              <FormSubtitle>Tell us about your project and we'll get back to you soon.</FormSubtitle>
              
              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="name">Full Name *</FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="email">Email Address *</FormLabel>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="company">Company Name</FormLabel>
                    <FormInput
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="subject">Subject *</FormLabel>
                    <FormInput
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <FormLabel htmlFor="message">Project Details *</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    required
                  />
                </FormGroup>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <span style={{ marginLeft: '8px' }}>→</span>}
                </SubmitButton>
              </Form>
            </FormContainer>
          </TwoColumnSection>

          {/* Full Width Guarantee Section */}
          <FullWidthGuarantee>
            <GuaranteeCard
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GuaranteeTitle>
                <Zap />
                24-Hour Response Guarantee
              </GuaranteeTitle>
              <GuaranteeText>
                We understand your time is valuable. Every inquiry receives a personalized response within 24 hours during business days.
              </GuaranteeText>
            </GuaranteeCard>
          </FullWidthGuarantee>
        </ContactContainer>
      </ContactSection>
    </PageLayout>
  )
}

export default ContactPage