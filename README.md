# J3C-Coding-Challenge-Terrence-Jung

## Setup
For this coding challenge, I will be using React/TypeScript, TailwindCSS, and Framer Motion. 

### React + TypeScript Setup
I will be using vite to setup my react/typescript project. To start a vite project:

<code>npm create vite@latest</code>

Then, follow the command line prompts and choose React + TypeScript. 

### Tailwind CSS Setup
To setup TailwindCSS with a Vite project, run the following commands:

<code>
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
</code>

Next, in the tailwind.config file, add paths to all template files:

<code>
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</code>

Finally, add the following to your index.css file:

<code>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</code>

### Framer Motion Setup
To install framer motion, run the following command:

<code>npm install framer-motion</code>

### Project Startup
First, ensure you have downloaded all of the project dependencies. Make sure that you are in your project directory.
<code>npm install</code>

Second, run the following command to run your build process:
<code>npm run dev</code>

## Project Notes
