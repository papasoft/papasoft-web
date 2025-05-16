import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	  site: 'https://papasoft.com',
	  integrations: [
		starlight({
			title: 'Papasoft',
			logo: {
				light: './src/assets/papasoft-logo.svg',
				dark: './src/assets/papasoft-logo-dark.svg',
				replacesTitle: true,
			  },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/papasoft' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ricktuttledev/'},
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/papasoft/'},
			],
			sidebar: [
				{
					label: 'Papasoft',
					items: [
						{ label: 'Rick Tuttle', slug: 'papasoft/rick-tuttle'},
						{ label: 'Mentoring', slug: 'papasoft/mentoring'},
						{ label: 'Contact Me', slug: 'papasoft/contact'},
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Intro', slug: 'resources/intro'},
						{ label: 'Humans First AI', slug: 'resources/humans-first'},
					],
				},
			],
		}),
	],
});
