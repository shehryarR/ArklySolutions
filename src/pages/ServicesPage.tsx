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
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]};
  }
`

const ServicesGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[10]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-top: 5px solid ${({ theme }) => theme.colors.primary.accent};
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(76, 201, 240, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-top-color: ${({ theme }) => theme.colors.primary.accent2};
  }

  &:hover::before {
    left: 100%;
  }
`

const ServiceIcon = styled(motion.img)`
  width: 60px;
  height: 60px;
  margin-bottom: ${({ theme }) => theme.spacing[5]};
  filter: drop-shadow(${({ theme }) => theme.shadows.md});
`

const ServiceTitle = styled.h3`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary.mid};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const ServiceDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
  font-size: ${({ theme }) => theme.fontSizes.base};
`

const ServiceFeatures = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  li {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    padding-left: ${({ theme }) => theme.spacing[6]};
    position: relative;
    color: ${({ theme }) => theme.colors.neutral.gray[600]};
    line-height: 1.6;

    &::before {
      content: '✓';
      color: ${({ theme }) => theme.colors.primary.accent};
      position: absolute;
      left: 0;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`

const ServiceCTA = styled(motion.a)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: all ${({ theme }) => theme.transitions.default};
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.accent2};
    transform: translateY(-2px);
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
      staggerChildren: 0.1
    }
  }
}

// Services data
const servicesData = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/OOjs_UI_icon_code.svg",
    title: "Custom Software Development",
    description: "We design and build modern, efficient applications tailored to your business. Whether you need an internal dashboard, a client‑facing platform, or automation tools, we create systems that scale as you grow.",
    features: [
      "Web Apps & Internal Tools",
      "API Integrations",
      "Database Architecture & Optimization", 
      "Custom Dashboards & Reporting Systems",
      "Process‑specific Automation Apps",
      "Mobile App Development",
      "Cloud Infrastructure Setup"
    ]
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/OOjs_UI_icon_calculator.svg",
    title: "Bookkeeping & Financial Management",
    description: "Our bookkeeping services help business owners stay organized, compliant, and financially confident. We provide accurate books and automated reports so you always know where your business stands.",
    features: [
      "Monthly Bookkeeping & Reconciliation",
      "Accounts Payable / Accounts Receivable",
      "Payroll Coordination",
      "Cleanup & Catch‑Up Work",
      "Custom Financial Dashboards",
      "Tax Preparation Support",
      "Cash Flow Management"
    ]
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/OOjs_UI_icon_settings.svg",
    title: "Process Automation",
    description: "We help companies eliminate repetitive tasks by automating operations and workflows. Our automations reduce errors, free up time, and increase consistency across your entire organization.",
    features: [
      "Automated Email & Notification Workflows",
      "Data Entry Automation",
      "Report Generation Systems",
      "CRM & Accounting Integrations",
      "Inventory & Scheduling Tools",
      "Document Management Automation",
      "Customer Onboarding Workflows"
    ]
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/47/OOjs_UI_icon_person.svg",
    title: "Business & Technical Consulting",
    description: "We provide clarity for founders and managers looking to streamline operations, modernize their systems, or improve profitability through strategic technology implementations.",
    features: [
      "Systems & Operations Audits",
      "Digital Transformation Strategy",
      "Workflow Optimization",
      "Tech Stack Planning",
      "Business Process Documentation",
      "Performance Improvement Plans",
      "Technology Roadmap Development"
    ]
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/OOjs_UI_icon_network.svg",
    title: "Data & Analytics Solutions",
    description: "Turn your raw data into clear insights. We build custom dashboards and analytics tools that help you make data‑driven decisions and track key performance indicators.",
    features: [
      "Performance & KPI Dashboards",
      "Business Metrics Automation",
      "Data Cleaning & Transformation",
      "SQL Database Management",
      "Real‑Time Reporting",
      "Predictive Analytics",
      "Data Visualization Tools"
    ]
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/OOjs_UI_icon_lock.svg",
    title: "Security & Compliance",
    description: "Protect your systems, data, and financials with our small‑business‑friendly security and compliance solutions that meet industry standards.",
    features: [
      "System Hardening & Access Control",
      "Data Protection Practices",
      "Password & Credential Management",
      "Audit‑Ready Documentation",
      "Compliance Framework Implementation",
      "Security Assessment & Monitoring",
      "Backup & Disaster Recovery"
    ]
  }
]

const ServicesPage: React.FC = () => {
  return (
    <PageLayout currentPage="services">
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
          Our Services
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Comprehensive solutions designed to transform your business operations and drive sustainable growth
        </PageSubtitle>
      </PageHeader>

      <Section>
        <ServicesGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceIcon
                src={service.icon}
                alt={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ServiceFeatures>
              <ServiceCTA
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </ServiceCTA>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>
    </PageLayout>
  )
}

export default ServicesPage