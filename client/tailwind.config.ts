import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],

  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;