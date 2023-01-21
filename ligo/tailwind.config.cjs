/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Jomhuria: ['Jomhuria', 'cursive'],
				WorkSans: ['Work Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
