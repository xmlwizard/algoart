import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],theme:{
    
      extend: {
        backgroundImage: {
          'hero-pattern': "url('./backgrounds/hero-pattern.svg')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      
    }
  }
,
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
