import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { PageLayout } from '../templates'

// Modern Hero Section with gradient mesh background
const HeroSection = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gradients.hero};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(37, 99, 235, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(124, 58, 237, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }
`

const HeroContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral.white};
`

const HeroTitle = styled(motion.h1)`
  font-size: clamp(${({ theme }) => theme.fontSizes['4xl']}, 5vw, ${({ theme }) => theme.fontSizes['8xl']});
  font-weight: ${({ theme }) => theme.fontWeights.black};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: -0.02em;
`

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${({ theme }) => theme.fonts.serif};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`

const HeroActions = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.lg};
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
    background: ${({ theme }) => theme.colors.primary.accent2};
  }

  &:hover::before {
    left: 100%;
  }
`

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.neutral.white};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.default};
  backdrop-filter: ${({ theme }) => theme.effects.backdropBlur};

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`

// Trust Indicators
const TrustIndicators = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[12]};
  flex-wrap: wrap;
  opacity: 0.7;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[8]};
  }
`

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.colors.accent.emerald};
  }
`

// Features Section
const FeaturesSection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary.surface};
  overflow: hidden;
`

const FeaturesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[20]};
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(${({ theme }) => theme.fontSizes['3xl']}, 4vw, ${({ theme }) => theme.fontSizes['6xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.2;
`

const SectionDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  font-family: ${({ theme }) => theme.fonts.serif};
`

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ theme }) => theme.spacing[10]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.neutral.gray[200]};
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.default};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradients.accent};
    transform: translateX(-100%);
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.primary.accent};
  }

  &:hover::before {
    transform: translateX(0);
  }
`

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.gradients.accent};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.text};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  line-height: 1.7;
  font-size: ${({ theme }) => theme.fontSizes.base};
`

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.gradients.surface};
  position: relative;
`

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const TestimonialGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[16]};
`

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.neutral.gray[200]};

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: ${({ theme }) => theme.spacing[8]};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.primary.accent};
    font-family: ${({ theme }) => theme.fonts.serif};
  }
`

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-style: italic;
  font-family: ${({ theme }) => theme.fonts.serif};
`

const TestimonialAuthor = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary.mid};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

// CTA Section
const CTASection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: ${({ theme }) => theme.colors.neutral.white};
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.3) 0%, transparent 50%);
    z-index: 1;
  }
`

const CTAContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`

const CTATitle = styled(motion.h2)`
  font-size: clamp(${({ theme }) => theme.fontSizes['3xl']}, 4vw, ${({ theme }) => theme.fontSizes['5xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const CTADescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  opacity: 0.9;
  font-family: ${({ theme }) => theme.fonts.serif};
`

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
}

// Data
const features = [
  {
    icon: "🚀",
    title: "Custom Software Development",
    description: "Enterprise-grade applications built with cutting-edge technologies, designed to scale with your business growth and evolving requirements."
  },
  {
    icon: "📊",
    title: "Financial Management & Analytics",
    description: "Comprehensive bookkeeping, financial reporting, and business intelligence solutions that provide deep insights into your performance."
  },
  {
    icon: "⚡",
    title: "Process Automation",
    description: "Intelligent automation systems that eliminate manual work, reduce errors, and free up your team to focus on strategic initiatives."
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    description: "Bank-level security protocols and industry compliance frameworks to protect your data and ensure regulatory adherence."
  }
]

const testimonials = [
  {
    text: "Arkly transformed our entire workflow. The automation they built saved us 20+ hours weekly and improved our accuracy dramatically.",
    author: "Operations Director, Distribution Company"
  },
  {
    text: "Finally, our financials are crystal clear. The automated reporting and dashboards make decision-making effortless.",
    author: "CEO, Service Company"
  }
]

const HomePage: React.FC = () => {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  
  const featuresRef = useRef(null)
  const isInView = useInView(featuresRef, { once: true, margin: "-100px" })

  return (
    <PageLayout currentPage="home">
      <HeroSection
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <HeroContainer>
          <motion.div style={{ y }}>
            <HeroTitle
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Business
              <br />
              with Expert Solutions
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We build custom software, automate processes, and manage finances 
              for forward-thinking companies ready to scale.
            </HeroSubtitle>

            <HeroActions
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <PrimaryButton
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <span>→</span>
              </PrimaryButton>
              
              <SecondaryButton
                href="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </SecondaryButton>
            </HeroActions>

            <TrustIndicators
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <TrustItem>
                <svg viewBox="0 0 20 20">
                  <path d="M10 18L3 7h14l-7 11z"/>
                </svg>
                50+ Projects Delivered
              </TrustItem>
              <TrustItem>
                <svg viewBox="0 0 20 20">
                  <path d="M10 18L3 7h14l-7 11z"/>
                </svg>
                98% Client Satisfaction
              </TrustItem>
              <TrustItem>
                <svg viewBox="0 0 20 20">
                  <path d="M10 18L3 7h14l-7 11z"/>
                </svg>
                5+ Years Experience
              </TrustItem>
            </TrustIndicators>
          </motion.div>
        </HeroContainer>
      </HeroSection>

      <FeaturesSection ref={featuresRef}>
        <FeaturesContainer>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Why Choose Arkly Solutions
            </SectionTitle>
            <SectionDescription
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We combine technical excellence with business acumen to deliver 
              solutions that don't just work—they transform how you operate.
            </SectionDescription>
          </SectionHeader>

          <FeaturesGrid
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <FeatureIcon>
                  {feature.icon}
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesSection>

      <TestimonialsSection>
        <TestimonialsContainer>
          <SectionTitle {...fadeInUp}>
            Trusted by Growing Companies
          </SectionTitle>
          <SectionDescription {...fadeInUp}>
            See how we've helped businesses streamline operations and accelerate growth.
          </SectionDescription>

          <TestimonialGrid
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>— {testimonial.author}</TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </TestimonialsContainer>
      </TestimonialsSection>

      <CTASection>
        <CTAContainer>
          <CTATitle {...fadeInUp}>
            Ready to Transform Your Business?
          </CTATitle>
          <CTADescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss your project and create a custom solution that drives real results.
          </CTADescription>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PrimaryButton
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)' }}
            >
              Get Started Today
              <span>→</span>
            </PrimaryButton>
          </motion.div>
        </CTAContainer>
      </CTASection>
    </PageLayout>
  )
}

export default HomePage