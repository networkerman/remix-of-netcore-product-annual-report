import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			teal: {
  				'50': 'hsl(180 60% 95%)',
  				'100': 'hsl(180 60% 90%)',
  				'200': 'hsl(180 70% 80%)',
  				'300': 'hsl(180 80% 65%)',
  				'400': 'hsl(180 90% 50%)',
  				'500': 'hsl(180 100% 35%)',
  				'600': 'hsl(180 100% 28%)',
  				'700': 'hsl(180 100% 22%)',
  				'800': 'hsl(180 100% 16%)',
  				'900': 'hsl(180 100% 10%)'
  			},
  			coral: {
  				'50': 'hsl(15 85% 97%)',
  				'100': 'hsl(15 85% 92%)',
  				'200': 'hsl(15 85% 82%)',
  				'300': 'hsl(15 85% 70%)',
  				'400': 'hsl(15 85% 60%)',
  				'500': 'hsl(15 80% 50%)',
  				'600': 'hsl(15 75% 42%)',
  				'700': 'hsl(15 70% 35%)',
  				'800': 'hsl(15 65% 28%)',
  				'900': 'hsl(15 60% 20%)'
  			},
  			navy: {
  				'50': 'hsl(220 25% 95%)',
  				'100': 'hsl(220 25% 88%)',
  				'200': 'hsl(220 25% 75%)',
  				'300': 'hsl(220 25% 60%)',
  				'400': 'hsl(220 25% 45%)',
  				'500': 'hsl(220 30% 30%)',
  				'600': 'hsl(220 30% 22%)',
  				'700': 'hsl(220 30% 16%)',
  				'800': 'hsl(220 30% 12%)',
  				'900': 'hsl(220 30% 8%)'
  			},
			cream: {
				'50': 'hsl(45 30% 99%)',
				'100': 'hsl(45 30% 98%)',
				'200': 'hsl(45 25% 94%)',
				'300': 'hsl(45 20% 88%)',
				'400': 'hsl(45 15% 80%)'
			},
			green: {
				'50': 'hsl(142 60% 96%)',
				'100': 'hsl(142 60% 90%)',
				'200': 'hsl(142 60% 80%)',
				'300': 'hsl(142 60% 65%)',
				'400': 'hsl(142 70% 50%)',
				'500': 'hsl(142 76% 36%)',
				'600': 'hsl(142 76% 28%)',
				'700': 'hsl(142 76% 22%)',
				'800': 'hsl(142 76% 16%)',
				'900': 'hsl(142 76% 10%)'
			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif',
  				'Apple Color Emoji',
  				'Segoe UI Emoji',
  				'Segoe UI Symbol',
  				'Noto Color Emoji'
  			],
  			display: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			serif: [
  				'ui-serif',
  				'Georgia',
  				'Cambria',
  				'Times New Roman',
  				'Times',
  				'serif'
  			],
  			mono: [
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'Monaco',
  				'Consolas',
  				'Liberation Mono',
  				'Courier New',
  				'monospace'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'2xl': '1rem',
  			'3xl': '1.5rem'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'float': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'pulse-glow': {
  				'0%, 100%': {
  					opacity: '0.6'
  				},
  				'50%': {
  					opacity: '1'
  				}
  			},
			'marquee': {
				'0%': {
					transform: 'translateX(0%)'
				},
				'100%': {
					transform: 'translateX(-50%)'
				}
			},
			'border-shimmer': {
				'0%': {
					borderColor: 'hsla(45, 90%, 55%, 0.4)'
				},
				'50%': {
					borderColor: 'hsla(45, 90%, 55%, 0.8)'
				},
				'100%': {
					borderColor: 'hsla(45, 90%, 55%, 0.4)'
				}
			},
			'slideRight': {
				'0%': { transform: 'translateX(-100%)' },
				'100%': { transform: 'translateX(100%)' }
			},
			'slideDown': {
				'0%': { transform: 'translateY(-100%)' },
				'100%': { transform: 'translateY(100%)' }
			},
			'slideLeft': {
				'0%': { transform: 'translateX(100%)' },
				'100%': { transform: 'translateX(-100%)' }
			},
			'slideUp': {
				'0%': { transform: 'translateY(100%)' },
				'100%': { transform: 'translateY(-100%)' }
			},
			'border-dash': {
				'0%': { strokeDashoffset: '0' },
				'100%': { strokeDashoffset: '-600' }
			}
  		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'float': 'float 6s ease-in-out infinite',
			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
			'marquee': 'marquee 30s linear infinite',
			'border-shimmer': 'border-shimmer 2s ease-in-out infinite',
			'border-dash': 'border-dash 2.5s linear infinite'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-hero': 'linear-gradient(135deg, hsl(180 100% 35%) 0%, hsl(200 80% 25%) 50%, hsl(15 85% 50%) 100%)',
  			'gradient-teal': 'linear-gradient(135deg, hsl(180 100% 35%) 0%, hsl(180 70% 45%) 100%)',
  			'gradient-coral': 'linear-gradient(135deg, hsl(15 85% 60%) 0%, hsl(35 90% 65%) 100%)',
  			'gradient-dark': 'linear-gradient(180deg, hsl(220 30% 12%) 0%, hsl(220 25% 18%) 100%)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
