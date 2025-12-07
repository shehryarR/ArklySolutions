import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from './Footer'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

interface PageLayoutProps {
  children: React.ReactNode
  currentPage?: 'home' | 'services' | 'about' | 'contact'
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, currentPage }) => {
  return (
    <Container>
      <Navigation currentPage={currentPage} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default PageLayout