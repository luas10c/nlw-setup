/**@type{import('tailwindcss').Config*/
module.exports = {
  content: ['App.tsx', 'src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: '#09090A'
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_500SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    }
  },
  plugins: []
}
