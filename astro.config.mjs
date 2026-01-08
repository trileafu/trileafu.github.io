// @ts-check
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import favicons from "astro-favicons";

import partytown from "@astrojs/partytown";

import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	site: "https://trileafu.me",
	vite: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@components": path.resolve(__dirname, "./src/components"),
				"@layouts": path.resolve(__dirname, "./src/layouts"),
				"@assets": path.resolve(__dirname, "./src/assets"),
			},
		},
		plugins: [tailwindcss()],
	},
	devToolbar: {
		enabled: false,
	},
	integrations: [
		react(),
		mdx(),
		sitemap(),
		robotsTxt(),
		favicons({
			name: "trileafu",
			short_name: "trileafu",
			input: "./src/assets/brands/favicon.png",
			themes: ["#000000"],
			appleStatusBarStyle: "black-translucent",
			background: "#262626",
			manifest: {
				start_url: "/",
				display: "browser",
				lang: "en-US",
				display_override: ["tabbed"],
			},
		}),
		jopSoftwarecookieconsent({
			guiOptions: {
				consentModal: {
					layout: "cloud inline",
					position: "bottom center",
				},
				preferencesModal: {
					layout: "box",
					equalWeightButtons: true,
					flipButtons: false,
				},
			},
			categories: {
				analytics: {
					services: {
						googleAnalytics: {
							label:
								'<a href="https://marketingplatform.google.com/about/analytics/terms/id/" target="_blank">Google Analytics</a>',
							cookies: [
								{
									name: /^_ga/,
								},
							],
						},
					},
				},
			},
			language: {
				default: "en",
				autoDetect: "browser",
				translations: {
					en: {
						consentModal: {
							title: "i use cookies",
							description:
								"hi there! i use cookies to improve your experience on this site. some are essential for basic functionality, while others help me analyze traffic and enhance my services. you can change your cookie preferences anytime from the footer icon.",
							acceptAllBtn: "accept all",
							acceptNecessaryBtn: "reject all",
							showPreferencesBtn: "manage preferences",
						},
						preferencesModal: {
							title: "consent preferences center",
							acceptAllBtn: "accept all",
							acceptNecessaryBtn: "reject all",
							savePreferencesBtn: "save preferences",
							closeIconLabel: "close modal",
							serviceCounterLabel: "service|services",
							sections: [
								{
									title: "cookie usage",
									description:
										"hi there! i use cookies to improve your experience on this site. some cookies are essential for basic site functions, while others help me analyze traffic and improve my services. you can update your choices anytime via the footer link.",
								},
								{
									title: "analytics cookies",
									description:
										"these help me understand how visitors use the site so i can improve it. you can toggle analytics on or off whenever you like.",
									linkedCategory: "analytics",
								},
							],
						},
					},
					id: {
						consentModal: {
							title: "saya menggunakan cookies",
							description:
								"halo! saya menggunakan cookies untuk meningkatkan pengalaman anda di situs web ini. beberapa cookies diperlukan untuk membantu saya menganalisis lalu lintas dan meningkatkan layanan saya. anda dapat mengelola preferensi cookie kapan saja melalui ikon cookie di footer.",
							acceptAllBtn: "terima semua",
							acceptNecessaryBtn: "tolak semua",
							showPreferencesBtn: "kelola preferensi",
						},
						preferencesModal: {
							title: "pusat preferensi persetujuan",
							acceptAllBtn: "terima semua",
							acceptNecessaryBtn: "tolak semua",
							savePreferencesBtn: "simpan preferensi",
							closeIconLabel: "tutup modal",
							serviceCounterLabel: "layanan|layanan",
							sections: [
								{
									title: "penggunaan cookie",
									description:
										"halo! saya menggunakan cookies untuk meningkatkan pengalaman anda di situs web ini. beberapa cookies diperlukan untuk fungsi dasar situs, sementara yang lain membantu saya menganalisis lalu lintas dan meningkatkan layanan saya. anda dapat mengelola preferensi cookie kapan saja melalui tautan di footer.",
								},
								{
									title: "cookie analitik",
									description:
										"halo! saya menggunakan cookies untuk meningkatkan pengalaman anda di situs web ini. beberapa cookies diperlukan untuk membantu saya menganalisis lalu lintas dan meningkatkan layanan saya. anda dapat mengelola preferensi cookie kapan saja melalui tautan di footer.",
									linkedCategory: "analytics",
								},
							],
						},
					},
				},
			},
		}),
		partytown(),
	],
});
