import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
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
				cyber: {
					"dark": "#0f172a",      // Dark background
					"light": "#f8fafc",     // Light text
					"primary": "#10b981",   // Updated to emerald
					"secondary": "#059669", // Updated to deeper emerald
					"accent": "#34d399",    // Updated to bright emerald
					"grid": "#1e293b"       // Grid lines
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"pulse-glow": {
					"0%, 100%": { 
						opacity: "1",
						boxShadow: "0 0 10px 1px rgba(16, 185, 129, 0.8), 0 0 15px 2px rgba(16, 185, 129, 0.5)" 
					},
					"50%": { 
						opacity: "0.8",
						boxShadow: "0 0 15px 3px rgba(16, 185, 129, 0.8), 0 0 25px 5px rgba(16, 185, 129, 0.5)" 
					}
				},
				"flicker": {
					"0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": { opacity: "1" },
					"20%, 21.999%, 63%, 63.999%, 65%, 69.999%": { opacity: "0.5" }
				},
				"grid-flow": {
					"0%": { backgroundPosition: "0px 0px" },
					"100%": { backgroundPosition: "40px 40px" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-15px)" }
				},
				"text-reveal": {
					"0%": { width: "0%" },
					"100%": { width: "100%" }
				},
				"shine": {
					"0%": { backgroundPosition: "200% center" },
					"100%": { backgroundPosition: "-200% center" }
				},
				"border-beam": {
					"0%": { backgroundPosition: "0% 0%" },
					"100%": { backgroundPosition: "100% 100%" }
				},
				"levitate": {
					"0%, 100%": { transform: "translateY(0) rotate(0deg)" },
					"25%": { transform: "translateY(-5px) rotate(-2deg)" },
					"75%": { transform: "translateY(5px) rotate(2deg)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"pulse-glow": "pulse-glow 2s infinite",
				"flicker": "flicker 5s linear infinite",
				"grid-flow": "grid-flow 20s linear infinite",
				"float": "float 5s ease-in-out infinite",
				"text-reveal": "text-reveal 1.5s ease-out forwards",
				"shine": "shine 8s ease-in-out infinite",
				"border-beam": "border-beam 3s linear infinite",
				"levitate": "levitate 6s ease-in-out infinite"
			},
			backgroundImage: {
				"cyber-grid": "linear-gradient(rgba(30, 41, 59, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.3) 1px, transparent 1px)",
				"glow-conic": "conic-gradient(from 180deg at 50% 50%, #10b981 0deg, #34d399 180deg, #10b981 360deg)",
				"glow-radial": "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(17, 24, 39, 0) 70%)",
				"shine-gradient": "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent)",
				"card-gradient": "linear-gradient(145deg, rgba(16, 185, 129, 0.01) 0%, rgba(16, 185, 129, 0.08) 100%)",
			},
			lineClamp: {
				3: '3',
				4: '4',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
