import { baseMetadata } from "@/lib/metadata";
import LenisProvider from "@/lib/context/LenisProvider";
import AOSWrapper from "@/lib/context/AOSWrapper";
import "@/styles/globals.scss";

export const metadata = baseMetadata;

export default function RootLayout({ children }) {
	return (
		<html lang="uk">
			<body>
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
