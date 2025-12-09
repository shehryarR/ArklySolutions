import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { PageLayout } from '../templates'

// Hero Section
const HeroSection = styled(motion.section)`
  position: relative;
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[20]};
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
    background: radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.2) 0%, transparent 60%);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
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
  font-size: clamp(${({ theme }) => theme.fontSizes['3xl']}, 4vw, ${({ theme }) => theme.fontSizes['6xl']});
  font-weight: ${({ theme }) => theme.fontWeights.black};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.serif};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`

// Services Section
const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary.surface};
`

const ServicesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: ${({ theme }) => theme.spacing[10]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`

const ServiceCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ theme }) => theme.spacing[12]};
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
    height: 6px;
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

  &:nth-child(even)::before {
    background: ${({ theme }) => theme.colors.gradients.primary};
  }
`

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.gradients.accent};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  flex-shrink: 0;
`

const ServiceTitleGroup = styled.div`
  flex: 1;
`

const ServiceTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.text};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.3;
`

const ServiceBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.neutral.gray[100]};
  color: ${({ theme }) => theme.colors.primary.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`

const ServiceFeatures = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`

const ServiceFeature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.5;
  
  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.accent.emerald};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    flex-shrink: 0;
    margin-top: 2px;
  }
`

const ServiceActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
`

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ theme }) => theme.colors.primary.accent2};
  }
`

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary.accent};
  border: 2px solid ${({ theme }) => theme.colors.primary.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.neutral.white};
    transform: translateY(-2px);
  }
`

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: ${({ theme }) => theme.colors.neutral.white};
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
    background: radial-gradient(circle at 30% 40%, rgba(37, 99, 235, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(124, 58, 237, 0.3) 0%, transparent 50%);
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
  font-size: clamp(${({ theme }) => theme.fontSizes['2xl']}, 3vw, ${({ theme }) => theme.fontSizes['4xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const CTADescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  opacity: 0.9;
  font-family: ${({ theme }) => theme.fonts.serif};
`


const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
}

// Services data
const servicesData = [
  {
    icon: "🚀",
    title: "Custom Software Development",
    badge: "Most Popular",
    description: "Enterprise-grade applications built with modern technologies, designed to scale with your business growth and integrate seamlessly with existing systems.",
    features: [
      "Web Applications & SaaS Platforms",
      "API Development & Integrations", 
      "Database Architecture & Optimization",
      "Custom Dashboards & Analytics",
      "Mobile App Development",
      "Cloud Infrastructure & DevOps",
      "Legacy System Modernization"
    ]
  },
  {
    icon: "📊",
    title: "Financial Management & Analytics",
    badge: "Essential",
    description: "Comprehensive bookkeeping and financial intelligence solutions that provide crystal-clear insights into your business performance and growth opportunities.",
    features: [
      "Monthly Bookkeeping & Reconciliation",
      "Automated Financial Reporting",
      "Cash Flow Analysis & Forecasting",
      "Tax Preparation Support",
      "Custom Financial Dashboards",
      "Budget Planning & Monitoring",
      "Performance Metrics Tracking"
    ]
  },
  {
    icon: "⚡",
    title: "Process Automation",
    badge: "High ROI",
    description: "Intelligent automation systems that eliminate manual work, reduce errors, and free up your team to focus on strategic initiatives that drive growth.",
    features: [
      "Workflow Automation Design",
      "Data Entry & Processing Automation",
      "Email & Notification Systems",
      "CRM & ERP Integrations",
      "Document Management Automation",
      "Inventory & Order Processing",
      "Customer Onboarding Workflows"
    ]
  },
  {
    icon: "🎯",
    title: "Business & Technical Consulting",
    badge: "Strategic",
    description: "Expert guidance for digital transformation, operational efficiency, and technology strategy to help you make informed decisions and avoid costly mistakes.",
    features: [
      "Digital Transformation Strategy",
      "Systems Architecture Review",
      "Process Optimization Analysis",
      "Technology Stack Assessment",
      "Scalability Planning",
      "Performance Improvement Plans",
      "Vendor Selection & Management"
    ]
  },
  {
    icon: "📈",
    title: "Data & Analytics Solutions",
    badge: "Insights",
    description: "Transform your raw data into actionable insights with custom analytics platforms, real-time dashboards, and predictive modeling capabilities.",
    features: [
      "Business Intelligence Dashboards",
      "Real-time Analytics Platforms",
      "Data Warehouse Design",
      "Predictive Analytics & ML",
      "KPI Monitoring Systems",
      "Data Visualization Tools",
      "Custom Reporting Solutions"
    ]
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    badge: "Protected",
    description: "Enterprise-grade security solutions and compliance frameworks that protect your data, ensure regulatory adherence, and build customer trust.",
    features: [
      "Security Assessment & Auditing",
      "Compliance Framework Implementation",
      "Data Protection & Privacy",
      "Access Control & Authentication",
      "Backup & Disaster Recovery",
      "Security Monitoring Systems",
      "Incident Response Planning"
    ]
  }
]

const ServicesPage: React.FC = () => {
  const servicesRef = useRef(null)
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" })

  return (
    <PageLayout currentPage="services">
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
            Comprehensive Business Solutions
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From custom software development to financial management, 
            we provide the expertise and technology your business needs to thrive.
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <ServicesSection ref={servicesRef}>
        <ServicesContainer>
          <ServicesGrid
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <ServiceHeader>
                  <ServiceIcon>
                    {service.icon}
                  </ServiceIcon>
                  <ServiceTitleGroup>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceBadge>{service.badge}</ServiceBadge>
                  </ServiceTitleGroup>
                </ServiceHeader>

                <ServiceDescription>
                  {service.description}
                </ServiceDescription>

                <ServiceFeatures>
                  {service.features.map((feature, featureIndex) => (
                    <ServiceFeature key={featureIndex}>
                      {feature}
                    </ServiceFeature>
                  ))}
                </ServiceFeatures>

                <ServiceActions>
                  <PrimaryButton
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                    <span>→</span>
                  </PrimaryButton>
                  <SecondaryButton
                    href="/about"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </SecondaryButton>
                </ServiceActions>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>

      <CTASection>
        <CTAContainer>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Operations?
          </CTATitle>
          
          <CTADescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss your specific needs and create a custom solution that drives measurable results for your business.
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
              Start Your Project Today
              <span>→</span>
            </PrimaryButton>
          </motion.div>
        </CTAContainer>
      </CTASection>
    </PageLayout>
  )
}

export default ServicesPage