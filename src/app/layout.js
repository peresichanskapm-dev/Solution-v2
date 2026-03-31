import { baseMetadata } from "@/lib/metadata";
import LenisProvider from "@/lib/context/LenisProvider";
import AOSWrapper from "@/lib/context/AOSWrapper";
import { Inter, Tenor_Sans } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-inter",
	weight: ["300", "400", "500"],
});

const tenorSans = Tenor_Sans({
	subsets: ["latin", "cyrillic"],
	variable: "--font-tenor",
	weight: "400",
});

export const metadata = baseMetadata;
export const viewport = {
	themeColor: "#e9e5da",
};

export default function RootLayout({ children }) {
	return (
		<html lang="uk">
			<body className={`${inter.variable} ${tenorSans.variable}`}>
				<LenisProvider>
					<AOSWrapper>
						{/* Header */}
						{children}
						{/* Footer */}
					</AOSWrapper>
				</LenisProvider>
			</body>
		</html>
	);
}
