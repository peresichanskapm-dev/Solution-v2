/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true, // <--- Вимикаємо серверну оптимізацію
	},
	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
	},
};

export default nextConfig;
