/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
	},
	sassOptions: {
		additionalData: `
      @import "@/styles/variables.scss";
      @import "@/styles/mixins.scss";
    `,
	},
};

export default nextConfig;
