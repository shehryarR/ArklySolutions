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

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }
`

const ContentGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[12]};
  grid-template-columns: 1fr;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`

const TextBlock = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const MainText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const HighlightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary.mid};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  font-style: italic;
`

const ValuesGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: ${({ theme }) => theme.spacing[16]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`

const ValueCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  border-top: 4px solid ${({ theme }) => theme.colors.primary.accent};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-top-color: ${({ theme }) => theme.colors.primary.accent2};
  }
`

const ValueIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.fontSizes.base};
`

const TestimonialsGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  grid-template-columns: 1fr;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-left: 5px solid ${({ theme }) => theme.colors.primary.accent};
  position: relative;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-left-color: ${({ theme }) => theme.colors.primary.accent2};
  }

  &:nth-child(2) {
    border-left-color: ${({ theme }) => theme.colors.primary.accent2};
    
    &:hover {
      border-left-color: ${({ theme }) => theme.colors.primary.accent};
    }
  }

  &:nth-child(3) {
    border-left-color: ${({ theme }) => theme.colors.primary.dark};
    
    &:hover {
      border-left-color: ${({ theme }) => theme.colors.primary.accent};
    }
  }
`

const TestimonialIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  opacity: 0.7;
`

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
  font-style: italic;
  position: relative;

  &::before {
    content: '"';
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.primary.accent};
    position: absolute;
    left: -25px;
    top: -15px;
    font-family: serif;
    opacity: 0.3;
  }
`

const TestimonialAuthor = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary.mid};
  font-size: ${({ theme }) => theme.fontSizes.base};
`

const TeamSection = styled(motion.section)`
  background: ${({ theme }) => theme.colors.neutral.gray[50]};
  padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.spacing[5]};
  margin: ${({ theme }) => theme.spacing[16]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]};
  }
`

const TeamContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`

const TeamText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing[8]} auto;
`

const StatsGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: ${({ theme }) => theme.spacing[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing[6]};
  }
`

const StatCard = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.base};
`

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const CTASection = styled(motion.section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.dark}, ${({ theme }) => theme.colors.primary.mid});
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[5]};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[16]};
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
const values = [
  {
    icon: "🎯",
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that directly impact your business growth and efficiency."
  },
  {
    icon: "🤝",
    title: "Partnership Approach",
    description: "We work alongside you as trusted partners, understanding your unique challenges and goals."
  },
  {
    icon: "⚡",
    title: "Agile & Efficient",
    description: "Our streamlined processes ensure rapid delivery without compromising on quality or attention to detail."
  },
  {
    icon: "🔧",
    title: "Technical Excellence",
    description: "We leverage cutting-edge technologies and best practices to build robust, scalable solutions."
  }
]

const testimonialsData = [
  {
    text: "Arkly completely transformed our internal workflow. We saved over 20 hours a week thanks to the custom automation tools they built.",
    author: "Operations Director, Distribution Company"
  },
  {
    text: "Our books have never been this clean. Monthly reporting is automated and accurate. Highly recommend.",
    author: "Small Business Owner"
  },
  {
    text: "Their dashboards make it incredibly easy to understand our financials and performance. Game changer for our team.",
    author: "CEO, Service Company"
  }
]

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
]

const AboutPage: React.FC = () => {
  return (
    <PageLayout currentPage="about">
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
          About Arkly Solutions
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering businesses through innovative technology and expert financial management
        </PageSubtitle>
      </PageHeader>

      <Section>
        <ContentGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TextBlock>
            <MainText>
              Arkly Solutions LLC was founded with a simple yet powerful vision: to bridge the gap between 
              cutting-edge technology and practical business solutions. We understand that every business 
              is unique, with its own challenges, goals, and operational requirements.
            </MainText>
            <MainText>
              Our team combines deep technical expertise with extensive business experience to deliver 
              solutions that not only work flawlessly but also drive measurable results. From custom 
              software development to comprehensive financial management, we're committed to helping 
              businesses of all sizes achieve sustainable growth.
            </MainText>
            <HighlightText>
              "We don't just build software – we build partnerships that last."
            </HighlightText>
          </TextBlock>
        </ContentGrid>

        <SectionTitle {...fadeInUp}>Our Core Values</SectionTitle>
        <ValuesGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <ValueCard
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      <Section>
        <SectionTitle {...fadeInUp}>What Clients Say</SectionTitle>
        <TestimonialsGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialIcon>💬</TestimonialIcon>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>— {testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Section>

      <TeamSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TeamContent>
          <SectionTitle {...fadeInUp}>Our Expertise</SectionTitle>
          <TeamText>
            Our multidisciplinary team brings together software engineers, financial experts, and 
            business consultants who share a passion for solving complex problems. With years of 
            experience across various industries, we understand the challenges modern businesses 
            face and have the skills to address them effectively.
          </TeamText>
          <TeamText>
            We stay current with the latest technologies and industry best practices, ensuring 
            that our clients always receive cutting-edge solutions that are built to last.
          </TeamText>

          <StatsGrid
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </TeamContent>
      </TeamSection>

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
          Ready to Get Started?
        </CTATitle>
        <CTAText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's discuss how we can help transform your business with innovative solutions 
          tailored to your specific needs.
        </CTAText>
        <CTAButton
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us Today
        </CTAButton>
      </CTASection>
    </PageLayout>
  )
}

export default AboutPage