# J3C-Coding-Challenge-Terrence-Jung

## Setup

For this coding challenge, I will be using React/TypeScript, TailwindCSS, and Framer Motion.

### React + TypeScript Setup

I will be using Vite to set up my React/TypeScript project. To start a Vite project, run:

```bash
npm create vite@latest
```

Follow the command line prompts and choose React + TypeScript.

### Tailwind CSS Setup

To set up TailwindCSS with a Vite project, run the following commands:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Next, in the `tailwind.config` file, add paths to all template files in the `content` object:

```javascript
/**@type {import('tailwindcss').Config}*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Finally, add the following to your `index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Framer Motion Setup

To install Framer Motion, run the following command:

```bash
npm install framer-motion
```

## Project Startup

First, ensure you have downloaded all of the project dependencies. Make sure that you are in your project directory. Then run the next command to run your build process.

```bash
npm install
npm run dev
```

## Project Notes

Time started: 3:40pm PST (Dec 10th, Sunday)

Time ended:

### Notes

#### Text Animation

- For text animations static, centered text (unhover) and animations on hover. For the hover animation, I have to make the bottom text visible.
- Used three span elements inside one span element. This way the 2nd and 3rd span elements are aligned correctly within the button. I made the 1st span element invisible.
- For animation, I used useAnimationControls to trigger the animation on the span element when a user hovers over the button element.
- Used a 0.5 duration for onHoverStart and a 0.05 duration for onHoverEnd. The site example has an instantaneous onHoverEnd animation but I was not able to implement that on mine due to an unusual, glitchy movement that happens.

#### Border Animation

- onHoverStart: Green -> Gold -> White
- onHoverEnd: completely reset
- starts from the right side and moves along a clockwise path
- the movement seems to have a slow to fast animation
