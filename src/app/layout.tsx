import type { Metadata } from "next"
import { Jua, Inter } from "next/font/google"
import "./globals.scss"

const jua = Jua({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	weight: ["400"],
})

const inter = Inter({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "El Rey Costijhon",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${jua.variable} ${inter.variable}`}>{children}</body>
		</html>
	)
}
