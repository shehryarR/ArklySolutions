import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { PageLayout } from '../templates'

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
    background: radial-gradient(circle at 70% 20%, rgba(37, 99, 235, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 30% 80%, rgba(124, 58, 237, 0.2) 0%, transparent 50%);
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

// Story Section
const StorySection = styled.section`
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary.surface};
`

const StoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[16]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[12]};
  }
`

const StoryContent = styled(motion.div)`
  order: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`

const StoryTitle = styled.h2`
  font-size: clamp(${({ theme }) => theme.fontSizes['2xl']}, 3vw, ${({ theme }) => theme.fontSizes['4xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.text};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.3;
`

const StoryText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-family: ${({ theme }) => theme.fonts.serif};

  &:last-of-type {
    margin-bottom: 0;
  }
`

const StoryHighlight = styled.div`
  background: ${({ theme }) => theme.colors.gradients.accent};
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-style: italic;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[8]};
  font-family: ${({ theme }) => theme.fonts.serif};
`

const StoryVisual = styled(motion.div)`
  order: 2;
  background: ${({ theme }) => theme.colors.gradients.surface};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ theme }) => theme.spacing[12]};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
    min-height: 300px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    background: ${({ theme }) => theme.colors.primary.accent};
    border-radius: 50%;
    opacity: 0.1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 40%;
    width: 30%;
    height: 30%;
    background: ${({ theme }) => theme.colors.primary.accent2};
    border-radius: 50%;
    opacity: 0.15;
  }
`

const StoryIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['9xl']};
  position: relative;
  z-index: 1;
`

// Values Section
const ValuesSection = styled.section`
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.gradients.surface};
`

const ValuesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[20]};
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(${({ theme }) => theme.fontSizes['2xl']}, 3vw, ${({ theme }) => theme.fontSizes['5xl']});
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

const ValuesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
`

const ValueCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ theme }) => theme.spacing[10]};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.neutral.gray[200]};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.gradients.accent};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin: 0 auto ${({ theme }) => theme.spacing[6]} auto;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.neutral.gray[600]};
  line-height: 1.7;
  font-size: ${({ theme }) => theme.fontSizes.base};
`

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.primary.surface};
`

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TestimonialGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[10]};
  margin-top: ${({ theme }) => theme.spacing[16]};
`

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ theme }) => theme.spacing[12]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.neutral.gray[200]};

  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: ${({ theme }) => theme.spacing[12]};
    font-size: ${({ theme }) => theme.fontSizes['8xl']};
    color: ${({ theme }) => theme.colors.primary.accent};
    font-family: ${({ theme }) => theme.fonts.serif};
    line-height: 1;
  }
`

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  font-style: italic;
  font-family: ${({ theme }) => theme.fonts.serif};
  text-align: center;
`

const TestimonialAuthor = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary.mid};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-align: center;
`

// Stats Section
const StatsSection = styled.section`
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: ${({ theme }) => theme.colors.neutral.white};
`

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  text-align: center;
`

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing[8]};
  backdrop-filter: ${({ theme }) => theme.effects.backdropBlur};
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  opacity: 0.9;
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

// Data
const values = [
  {
    icon: "🎯",
    title: "Results-Driven Excellence",
    description: "Every solution we build is designed with measurable outcomes in mind, focusing on ROI and tangible business impact."
  },
  {
    icon: "🤝",
    title: "True Partnership",
    description: "We don't just deliver projects—we become invested partners in your success, providing ongoing support and strategic guidance."
  },
  {
    icon: "⚡",
    title: "Agile Innovation",
    description: "Rapid iteration, continuous improvement, and cutting-edge technologies ensure you stay ahead of the competition."
  },
  {
    icon: "🔧",
    title: "Technical Mastery",
    description: "Deep expertise across modern technologies, best practices, and industry standards guarantees robust, scalable solutions."
  }
]

const testimonialsData = [
  {
    text: "Arkly Solutions completely transformed our internal workflow. The automation they built saved us over 20 hours a week and improved our accuracy dramatically. Their team understood our business needs perfectly.",
    author: "Operations Director, Distribution Company"
  },
  {
    text: "Our books have never been this clean and our reporting has never been this accurate. The custom dashboards make it incredibly easy to understand our financials and performance. Highly recommend.",
    author: "Small Business Owner"
  },
  {
    text: "The custom software they developed has been a game changer for our team. It's intuitive, powerful, and exactly what we needed to scale our operations efficiently.",
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
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const testimonialsRef = useRef(null)
  
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  return (
    <PageLayout currentPage="about">
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
            Building the Future of Business
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We bridge the gap between cutting-edge technology and practical business solutions, 
            empowering companies to achieve unprecedented growth and efficiency.
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>

      <StorySection ref={storyRef}>
        <StoryContainer>
          <StoryContent
            initial={{ opacity: 0, x: -50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <StoryTitle>Our Story</StoryTitle>
            <StoryText>
              Arkly Solutions was founded with a clear mission: to help businesses leverage 
              technology not as a burden, but as a powerful catalyst for growth. We recognized 
              that many companies struggle with outdated processes, manual workflows, and 
              disconnected systems that hold them back from reaching their full potential.
            </StoryText>
            <StoryText>
              Our team brings together seasoned software engineers, financial experts, and 
              business consultants who share a passion for solving complex problems. We've 
              worked across industries—from startups to enterprise companies—and understand 
              the unique challenges that businesses face at every stage of growth.
            </StoryText>
            <StoryHighlight>
              "We don't just build software—we architect solutions that transform how businesses operate."
            </StoryHighlight>
          </StoryContent>
          
          <StoryVisual
            initial={{ opacity: 0, x: 50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StoryIcon>🏗️</StoryIcon>
          </StoryVisual>
        </StoryContainer>
      </StorySection>

      <ValuesSection ref={valuesRef}>
        <ValuesContainer>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Core Values
            </SectionTitle>
            <SectionDescription
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              These principles guide every project we take on and every relationship we build.
            </SectionDescription>
          </SectionHeader>

          <ValuesGrid
            variants={staggerContainer}
            initial="initial"
            animate={isValuesInView ? "animate" : "initial"}
          >
            {values.map((value, index) => (
              <ValueCard
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>

      <TestimonialsSection ref={testimonialsRef}>
        <TestimonialsContainer>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              What Our Clients Say
            </SectionTitle>
            <SectionDescription
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real feedback from companies we've helped transform their operations.
            </SectionDescription>
          </SectionHeader>

          <TestimonialGrid
            variants={staggerContainer}
            initial="initial"
            animate={isTestimonialsInView ? "animate" : "initial"}
          >
            {testimonialsData.map((testimonial, index) => (
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

      <StatsSection>
        <StatsContainer>
          <StatsGrid
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </StatsContainer>
      </StatsSection>
    </PageLayout>
  )
}

export default AboutPage