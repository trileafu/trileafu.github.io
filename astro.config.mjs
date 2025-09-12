// @ts-check
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
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
				scope: "browser",
				start_url: "/",
				display: "browser",
				lang: "id-ID",
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
				default: "id",
				autoDetect: "browser",
				translations: {
					id: {
						consentModal: {
							title: "Kami menggunakan cookies",
							description:
								"Halo! Kami menggunakan cookies untuk meningkatkan pengalaman Anda di situs web kami. Beberapa cookies diperlukan untuk membantu kami menganalisis lalu lintas dan meningkatkan layanan kami. Anda dapat mengelola preferensi cookie Anda kapan saja melalui ikon cookie di footer.",
							acceptAllBtn: "Terima semua",
							acceptNecessaryBtn: "Tolak semua",
							showPreferencesBtn: "Kelola preferensi",
						},
						preferencesModal: {
							title: "Pusat Preferensi Persetujuan",
							acceptAllBtn: "Terima semua",
							acceptNecessaryBtn: "Tolak semua",
							savePreferencesBtn: "Simpan preferensi",
							closeIconLabel: "Tutup modal",
							serviceCounterLabel: "Layanan|Layanan",
							sections: [
								{
									title: "Penggunaan Cookie",
									description:
										"Halo! Kami menggunakan cookies untuk meningkatkan pengalaman Anda di situs web kami. Beberapa cookies diperlukan untuk fungsi dasar situs, sementara yang lain membantu kami menganalisis lalu lintas dan meningkatkan layanan kami. Anda dapat mengelola preferensi cookie Anda kapan saja melalui tautan di footer.",
								},
								{
									title: "Cookie Analitik",
									description:
										"Halo! Kami menggunakan cookies untuk meningkatkan pengalaman Anda di situs web kami. Beberapa cookies diperlukan untuk membantu kami menganalisis lalu lintas dan meningkatkan layanan kami. Anda dapat mengelola preferensi cookie Anda kapan saja melalui tautan di footer.",
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
