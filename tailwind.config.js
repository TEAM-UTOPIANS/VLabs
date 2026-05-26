import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./catalog.html",
    "./lab.html",
    "./js/**/*.js",
    "./assets/**/*.js",
    "./simulations/**/*.{html,js,md,json}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "surface-container-high": "var(--color-surface-container-high)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "surface-container": "var(--color-surface-container)",
        "primary-container": "var(--color-primary-container)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "secondary": "var(--color-secondary)",
        "outline": "var(--color-outline)",
        "surface-tint": "var(--color-primary-dim)",
        "surface": "var(--color-surface)",
        "background": "var(--color-background)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-variant": "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        "surface-bright": "var(--color-surface)",
        "on-secondary": "var(--color-on-surface)",
        "secondary-container": "var(--color-secondary-container)",
        "on-primary": "var(--color-on-surface)",
        "tertiary": "var(--color-on-surface)",
        "inverse-primary": "var(--color-primary)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "on-surface": "var(--color-on-surface)",
        "primary-fixed": "var(--color-primary)",
        "on-background": "var(--color-on-surface)",
        "on-primary-container": "var(--color-on-primary-container)",
        "primary": "var(--color-primary)"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.375rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
      spacing: {
        "panel-padding": "24px",
        "margin-desktop": "32px",
        "unit": "4px",
        "margin-mobile": "16px",
        "gutter": "16px"
      }
    },
  },
  plugins: [
    forms,
  ],
}
