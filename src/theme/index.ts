export const theme = {
  colors: {
    primary: {
      dark: '#1a2332',       // Rich blue-gray (keep for text)
      mid: '#2a93c7',        // Logo blue (main brand color)
      accent: '#2a93c7',     // Logo blue (consistent branding)
      accent2: '#3ca8a7',    // Logo teal (subtle accent)
      light: '#ffffff',      // Pure white instead of blue-tinted
      surface: '#ffffff',    // Pure white surfaces
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      text: '#1a2332',       // Rich dark text
      gray: {
        50: '#ffffff',       // Pure white instead of tinted
        100: '#f8fafc',      // Very light gray
        200: '#f1f5f9',      // Light gray for borders
        300: '#e2e8f0',      // Medium light gray
        400: '#94a3b8',      // Medium gray
        500: '#64748b',      // Balanced gray
        600: '#475569',      // Dark gray for secondary text
        700: '#334155',      // Darker gray
        800: '#1e293b',      // Very dark gray
        900: '#1a2332',      // Darkest (matches primary.dark)
      },
    },
    accent: {
      blue: '#2a93c7',       // Your main brand blue
      indigo: '#3ca8a7',     // Your brand teal
      purple: '#8b5cf6',     // Modern purple
      pink: '#ec4899',       // Modern pink
      emerald: '#10b981',    // Modern green
      amber: '#f59e0b',      // Modern amber
      orange: '#f97316',     // Modern orange
      red: '#ef4444',        // Modern red
    },
    gradients: {
      primary: 'linear-gradient(135deg, #2a93c7 0%, #3ca8a7 100%)',           // Clean brand gradient
      accent: 'linear-gradient(135deg, #2a93c7 0%, #3ca8a7 100%)',            // Same as primary
      surface: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',           // Very subtle surface gradient
      hero: 'linear-gradient(135deg, #1a2332 0%, #2a93c7 50%, #3ca8a7 100%)', // Dark dramatic hero gradient
      cta: 'linear-gradient(135deg, #2a93c7 0%, #1e7ba8 100%)',              // Darker but cleaner CTA
    }
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    heading: "'Clash Display', 'Clash Grotesk', 'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
    serif: "'Crimson Pro', 'Source Serif Pro', Georgia, serif",
  },
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
    '9xl': '8rem',     // 128px
  },
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',   // 2px
    1: '0.25rem',      // 4px
    1.5: '0.375rem',   // 6px
    2: '0.5rem',       // 8px
    2.5: '0.625rem',   // 10px
    3: '0.75rem',      // 12px
    3.5: '0.875rem',   // 14px
    4: '1rem',         // 16px
    5: '1.25rem',      // 20px
    6: '1.5rem',       // 24px
    7: '1.75rem',      // 28px
    8: '2rem',         // 32px
    9: '2.25rem',      // 36px
    10: '2.5rem',      // 40px
    11: '2.75rem',     // 44px
    12: '3rem',        // 48px
    14: '3.5rem',      // 56px
    16: '4rem',        // 64px
    20: '5rem',        // 80px
    24: '6rem',        // 96px
    28: '7rem',        // 112px
    32: '8rem',        // 128px
    36: '9rem',        // 144px
    40: '10rem',       // 160px
    44: '11rem',       // 176px
    48: '12rem',       // 192px
    52: '13rem',       // 208px
    56: '14rem',       // 224px
    60: '15rem',       // 240px
    64: '16rem',       // 256px
    72: '18rem',       // 288px
    80: '20rem',       // 320px
    96: '24rem',       // 384px
  },
  borderRadius: {
    none: '0',
    xs: '0.125rem',    // 2px
    sm: '0.25rem',     // 4px
    base: '0.375rem',  // 6px
    md: '0.5rem',      // 8px
    lg: '0.75rem',     // 12px
    xl: '1rem',        // 16px
    '2xl': '1.5rem',   // 24px
    '3xl': '2rem',     // 32px
    '4xl': '2.5rem',   // 40px
    full: '9999px',
  },
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '2xl': '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    glow: '0 0 20px rgba(42, 147, 199, 0.25)',
    'glow-lg': '0 0 60px rgba(42, 147, 199, 0.4)',
  },
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
  },
  transitions: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    spring: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1020,
    banner: 1030,
    overlay: 1040,
    modal: 1050,
    popover: 1060,
    skipLink: 1070,
    toast: 1080,
    tooltip: 1090,
  },
  effects: {
    blur: {
      none: '0',
      sm: '4px',
      base: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    backdropBlur: 'blur(8px) saturate(180%)',
    glassBackground: 'rgba(255, 255, 255, 0.1)',
    glassBorder: '1px solid rgba(255, 255, 255, 0.2)',
  }
} as const

export type Theme = typeof theme