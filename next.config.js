const path = require("path");

module.exports = {
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
