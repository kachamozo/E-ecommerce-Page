const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// importamos en el index.html la fuente desde google y lo elejimos aqui
			fontFamily: {
				sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
			},
			// cambiamos los nombres de los colores para que no se sobreescriban los coloers por defecto que tiene tailwind
			colors: {
				'orange-primary': 'hsl(26, 100%, 55%)',
				'pale-orange': 'hsl(25, 100%, 94%)',
				'very-dark-blue': 'hsl(220, 13%, 13%)',
				'dark-grayish-blue': 'hsl(219, 9%, 45%)',
				'grayish-blue': 'hsl(220, 14%, 75%)',
				'light-grayish-blue': 'hsl(223, 64%, 98%)',
				'black-75': 'hsl(0, 0%, 0%)',
			},
		},
	},
	plugins: [],
};
