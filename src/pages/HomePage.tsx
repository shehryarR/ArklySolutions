import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { PageLayout } from '../templates'

// Page-specific styled components
const Header = styled(motion.header)`
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.primary.dark}, ${({ theme }) => theme.colors.primary.mid});
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[5]};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(76, 201, 240, 0.1) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[4]};
  }
`

const Logo = styled(motion.img)`
  height: 80px;
  width: auto;
  display: block;
  margin: 0 auto ${({ theme }) => theme.spacing[3]} auto;
  filter: drop-shadow(${({ theme }) => theme.shadows.lg});
`

const MainTitle = styled(motion.h1)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`

const Subtitle = styled(motion.p)`
  margin-top: ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-top: ${({ theme }) => theme.spacing[4]};
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

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  position: relative;
  font-family: ${({ theme }) => theme.fonts.heading};

  &::after {
    content: '';
    width: 70px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary.accent};
    display: block;
    margin: ${({ theme }) => theme.spacing[3]} auto 0 auto;
    border-radius: ${({ theme }) => theme.borderRadius.base};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`

const IntroText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing[12]} auto;
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
`

const FeatureGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: ${({ theme }) => theme.spacing[16]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-top: 4px solid ${({ theme }) => theme.colors.primary.accent};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-top-color: ${({ theme }) => theme.colors.primary.accent2};
  }
`

const FeatureIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  margin: 0 auto ${({ theme }) => theme.spacing[4]} auto;
  background: ${({ theme }) => theme.colors.primary.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.neutral.white};
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  line-height: 1.6;
`

// New Testimonials Section
const TestimonialsSection = styled(motion.section)`
  background: ${({ theme }) => theme.colors.neutral.gray[50]};
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[5]};
  margin: ${({ theme }) => theme.spacing[20]} 0;
`

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.base};
  border-left: 4px solid ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-align: center;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`

const TestimonialText = styled.p`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  line-height: 1.6;
`

const TestimonialAuthor = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary.mid};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

// New Preview Sections
const PreviewSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[5]};
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`

const PreviewGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: ${({ theme }) => theme.spacing[10]};
`

const PreviewCard = styled(motion.a)`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.base};
  text-decoration: none;
  display: block;
  transition: all ${({ theme }) => theme.transitions.default};
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary.accent};
  }
`

const PreviewIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const PreviewTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const PreviewDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const PreviewButton = styled.span`
  color: ${({ theme }) => theme.colors.primary.accent};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const CTASection = styled(motion.section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.dark}, ${({ theme }) => theme.colors.primary.mid});
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[5]};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[20]};
`

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const CTAText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.accent2};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
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
const features = [
  {
    icon: "💻",
    title: "Custom Software Solutions",
    description: "Tailored applications designed specifically for your business needs and workflows."
  },
  {
    icon: "📊",
    title: "Financial Management",
    description: "Professional bookkeeping and financial reporting to keep your business on track."
  },
  {
    icon: "⚡",
    title: "Process Automation",
    description: "Streamline operations and eliminate repetitive tasks with intelligent automation."
  },
  {
    icon: "🔒",
    title: "Secure & Compliant",
    description: "Enterprise-grade security and compliance standards for peace of mind."
  }
]

const testimonials = [
  {
    text: "Arkly completely transformed our internal workflow. We saved over 20 hours a week thanks to their automation tools.",
    author: "Operations Director, Distribution Company"
  },
  {
    text: "Our books have never been this clean. Monthly reporting is automated and accurate.",
    author: "Small Business Owner"
  }
]

const previews = [
  {
    icon: "🛠️",
    title: "Our Services",
    description: "Discover our complete range of software development, automation, and financial solutions.",
    link: "/services",
    cta: "View All Services"
  },
  {
    icon: "🏢",
    title: "About Us",
    description: "Learn about our team, values, and commitment to transforming businesses through technology.",
    link: "/about",
    cta: "Our Story"
  },
  {
    icon: "📞",
    title: "Get Started",
    description: "Ready to transform your business? Let's discuss your project and how we can help.",
    link: "/contact",
    cta: "Contact Us"
  }
]

const HomePage: React.FC = () => {
  return (
    <PageLayout currentPage="home">
      <Header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Logo
          src="/images/logo.png"
          alt="Arkly Solutions Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <MainTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Arkly Solutions LLC
        </MainTitle>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transforming businesses through innovative technology solutions and expert financial management
        </Subtitle>
      </Header>

      <Section>
        <SectionTitle {...fadeInUp}>Welcome to Arkly Solutions</SectionTitle>
        <IntroText {...fadeInUp}>
          We're your trusted partner for custom software development, financial management, and business automation. 
          Our team combines technical expertise with deep business understanding to deliver solutions that drive real results.
        </IntroText>

        <FeatureGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureIcon
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Section>

      <TestimonialsSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <SectionTitle {...fadeInUp}>What Clients Say</SectionTitle>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>— {testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </div>
      </TestimonialsSection>

      <PreviewSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle {...fadeInUp}>Explore More</SectionTitle>
        <PreviewGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {previews.map((preview, index) => (
            <PreviewCard
              key={index}
              href={preview.link}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <PreviewIcon>{preview.icon}</PreviewIcon>
              <PreviewTitle>{preview.title}</PreviewTitle>
              <PreviewDescription>{preview.description}</PreviewDescription>
              <PreviewButton>{preview.cta} →</PreviewButton>
            </PreviewCard>
          ))}
        </PreviewGrid>
      </PreviewSection>

      <CTASection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CTATitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Business?
        </CTATitle>
        <CTAText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's discuss how our solutions can streamline your operations and accelerate your growth.
        </CTAText>
        <CTAButton
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Get Started Today
        </CTAButton>
      </CTASection>
    </PageLayout>
  )
}

export default HomePage