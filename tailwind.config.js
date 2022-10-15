/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				beige: "#bf8178",
				black: "#051005",
			},
		},
	},
	corePlugins: {
		fontSize: false,
	},
	plugins: [require("tailwindcss-fluid-type")],
};
