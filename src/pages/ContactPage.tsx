import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { PageLayout } from '../templates'

// Page-specific styled components
const PageHeader = styled(motion.header)`
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.primary.dark}, ${({ theme }) => theme.colors.primary.mid});
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[5]};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]};
  }
`

const PageTitle = styled(motion.h1)`
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`

const PageSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const Section = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[5]};
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]};
  }
`

const ContactGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[12]};
  grid-template-columns: 1fr 1fr;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[10]};
  }
`

const ContactInfo = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[10]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border-top: 5px solid ${({ theme }) => theme.colors.primary.accent};
`

const ContactForm = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[10]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border-top: 5px solid ${({ theme }) => theme.colors.primary.accent2};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const ContactItem = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
`

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.neutral.white};
  flex-shrink: 0;
`

const ContactDetails = styled.div`
  flex: 1;
`

const ContactLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.colors.primary.dark};
`

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  line-height: 1.6;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.base};
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.accent};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent2};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary.dark};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ theme }) => theme.colors.neutral.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: all ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.accent};
    box-shadow: 0 0 0 3px rgba(76, 201, 240, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.gray[400]};
  }
`

const FormTextarea = styled.textarea`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ theme }) => theme.colors.neutral.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 120px;
  resize: vertical;
  transition: all ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.accent};
    box-shadow: 0 0 0 3px rgba(76, 201, 240, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.gray[400]};
  }
`

const SubmitButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.accent2};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  &:active {
    transform: translateY(0);
  }
`

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Page data
const contactData = [
  {
    icon: "📧",
    label: "Email",
    text: "Ready to discuss your project?",
    link: "hello@arklysolutions.com",
    href: "mailto:hello@arklysolutions.com"
  },
  {
    icon: "📞",
    label: "Phone",
    text: "Call us for immediate assistance",
    link: "(___) ___‑____",
    href: "tel:+1234567890"
  },
  {
    icon: "💬",
    label: "Response Time",
    text: "We typically respond within 24 hours",
    link: "Business Hours: 9 AM - 6 PM EST",
    href: null
  },
  {
    icon: "🚀",
    label: "Free Consultation",
    text: "Get expert advice at no cost",
    link: "Schedule a discovery call",
    href: "mailto:hello@arklysolutions.com?subject=Free Consultation Request"
  }
]

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <PageLayout currentPage="contact">
      <PageHeader
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact Us
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ready to transform your business? Let's start the conversation.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <ContactGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactInfo variants={fadeInUp}>
            <SectionTitle>Get In Touch</SectionTitle>
            {contactData.map((contact, index) => (
              <ContactItem
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ContactIcon>{contact.icon}</ContactIcon>
                <ContactDetails>
                  <ContactLabel>{contact.label}</ContactLabel>
                  <ContactText>{contact.text}</ContactText>
                  {contact.href ? (
                    <ContactLink href={contact.href}>{contact.link}</ContactLink>
                  ) : (
                    <ContactText style={{ fontWeight: 500, color: '#1b263b' }}>
                      {contact.link}
                    </ContactText>
                  )}
                </ContactDetails>
              </ContactItem>
            ))}
          </ContactInfo>

          <ContactForm variants={fadeInUp}>
            <SectionTitle>Send Us a Message</SectionTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@company.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="company">Company Name</FormLabel>
                <FormInput
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What can we help you with?"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Send Message
              </SubmitButton>
            </Form>
          </ContactForm>
        </ContactGrid>
      </Section>
    </PageLayout>
  )
}

export default ContactPage