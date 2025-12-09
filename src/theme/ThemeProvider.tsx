import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme, Theme } from './index'

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    font-variant-ligatures: common-ligatures;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.neutral.text};
    background-color: ${({ theme }) => theme.colors.primary.light};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    overflow-x: hidden;
  }

  /* Typography Improvements */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 1.2;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    letter-spacing: -0.025em;
  }

  p {
    line-height: 1.7;
    font-feature-settings: "kern" 1;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Modern scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.accent};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: all ${({ theme }) => theme.transitions.default};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary.accent2};
  }

  /* Selection */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  ::-moz-selection {
    background-color: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  /* Focus styles */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.accent};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    body {
      background: ${({ theme }) => theme.colors.neutral.white};
      color: ${({ theme }) => theme.colors.neutral.black};
    }
  }

  /* Dark mode support (future enhancement) */
  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
    }
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Smooth animations */
  .animate-in {
    animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(37, 99, 235, 0.5);
    }
  }
`

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider