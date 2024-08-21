/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"loop-scroll": {
                    "from": { transform: "translateX(0)" },
                    "to": { transform: "translateX(-100%)" },
                },
				"fade-in": {
                    "0%": {
                        opacity: 0.5
                    },
                    "100%": {
                        opacity: 1
                    },
                },
				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"loop-scroll": "loop-scroll 25s linear infinite",
				"fade-in": 'fade-in 0.5s ease-in-out 0.25s 1',
				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"dark-orange": "#d1350f",

			},
			fontFamily: {

				"oswald": [ "oswald", "sans-serif" ],
				"proxima_nova_condensed": [ "proxima-nova-condensed", "sans-serif" ],
				"proxima_nova": [ "proxima-nova", "sans-serif" ],
				"roboto": [ "roboto", "sans-serif" ],

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
