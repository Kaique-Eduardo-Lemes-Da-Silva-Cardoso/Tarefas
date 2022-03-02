module.exports = {
content: ["./src/Pages/js/*.jsx","./src/components/js/*.jsx"],
purge:["./src/Pages/js/*.jsx","./src/components/js/*.jsx"],
  
  theme: {
    neumorphismColor: {
      red: {
        100: '#FBEBE9',
        200: '#F5CEC7',
        // ...
      },
      neumorphismSize: {
        xs: '0.05em',
        sm: '0.1em',
        default: '0.2em',
        lg: '0.4em',
        xl: '0.8em',
      },

    extend: {},
  },
  variants: {
    neumorphismFlat: ['responsive'],
    neumorphismConcave: false,
    neumorphismConvex: ['responsive', 'hover'],
    neumorphismInset: ['focus', 'active'],
  },
  plugins: [require('tailwindcss-neumorphism')],}}

