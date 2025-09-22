import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const ivyPrestoHeadline = localFont({
	src: [
		{
			path: "./Ivy Presto/Ivy Presto Headline Light.otf",
			style: "normal",
		},
	],
	variable: "--font-ivy-headline",
});

export const ivyPrestoDisplay = localFont({
	src: [
		{
			path: "./Ivy Presto/Ivy Presto Display Light.otf",
			style: "italic",
		},
	],
	variable: "--font-ivy-display",
});

export const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"],
});
