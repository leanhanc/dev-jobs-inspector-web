const path = require("path");
const withSvgr = require("next-plugin-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		prependData: `
    @import "./mixins.sass"
  `,
	},
	images: {
		deviceSizes: [600, 960, 1280, 1920],
	},
};

module.exports = withSvgr(nextConfig);
