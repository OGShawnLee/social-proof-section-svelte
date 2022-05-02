import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    colors: {
      black: 'hsl(0, 0, 0)',
      magenta: {
        100: 'hsl(300, 24%, 96%)',
        300: 'hsl(303, 10%, 53%)',
        700: 'hsl(300, 43%, 22%)',
      },
      pink: 'hsl(333, 80%, 67%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
  },
});
