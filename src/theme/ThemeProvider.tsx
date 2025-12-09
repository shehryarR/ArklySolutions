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
    background-color: ${({ theme }) => theme.colors.primary.light}; // Pure white background
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    overflow-x: hidden;
  }

  /* Typography Improvements - cleaner hierarchy */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 1.2;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    letter-spacing: -0.025em;
    color: ${({ theme }) => theme.colors.neutral.text}; // Consistent text color
  }

  p {
    line-height: 1.7;
    font-feature-settings: "kern" 1;
    color: ${({ theme }) => theme.colors.neutral.text};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary.accent};
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    transition: all ${({ theme }) => theme.transitions.default};
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Modern minimal scrollbar */
  ::-webkit-scrollbar {
    width: 4px; // Thinner scrollbar
  }

  ::-webkit-scrollbar-track {
    background: transparent; // No track background
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutral.gray[300]}; // Light gray thumb
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: all ${({ theme }) => theme.transitions.default};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary.accent}; // Brand color on hover
  }

  /* Clean selection */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  ::-moz-selection {
    background-color: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  /* Modern focus styles */
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

  /* Clean animations - less bouncy, more smooth */
  .animate-in {
    animation: fadeInUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(10px); // Less dramatic movement
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Subtle hover effects */
  .hover-lift {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  .hover-lift:hover {
    transform: translateY(-2px);
  }

  /* Modern card styles */
  .card {
    background: ${({ theme }) => theme.colors.primary.surface};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    border: 1px solid ${({ theme }) => theme.colors.neutral.gray[200]};
    transition: all ${({ theme }) => theme.transitions.default};
  }

  .card:hover {
    border-color: ${({ theme }) => theme.colors.neutral.gray[300]};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  /* Button styles */
  .btn-primary {
    background: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.neutral.white};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.default};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  .btn-primary:hover {
    background: #1e7ba8; // Darker shade on hover
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  .btn-secondary {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary.accent};
    border: 1px solid ${({ theme }) => theme.colors.neutral.gray[300]};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.default};
  }

  .btn-secondary:hover {
    background: ${({ theme }) => theme.colors.neutral.gray[50]};
    border-color: ${({ theme }) => theme.colors.primary.accent};
  }

  /* Input styles */
  .input {
    background: ${({ theme }) => theme.colors.primary.surface};
    border: 1px solid ${({ theme }) => theme.colors.neutral.gray[300]};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.neutral.text};
    transition: all ${({ theme }) => theme.transitions.default};
  }

  .input:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.accent};
    box-shadow: 0 0 0 3px rgba(42, 147, 199, 0.1);
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