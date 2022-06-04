const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
packages.push(path.join(__dirname, "../../libs/client"));
packages.push(path.join(__dirname, "../../libs/core"));
packages.push(path.join(__dirname, "../../libs/main"));
packages.push(path.join(__dirname, "../../libs/ui"));

module.exports = {
	webpack: {
		configure: (webpackConfig, arg) => {
			const { isFound, match } = getLoader(
				webpackConfig,
				loaderByName("babel-loader")
			);
			if (isFound) {
				const include = Array.isArray(match.loader.include)
					? match.loader.include
					: [match.loader.include];
				match.loader.include = include.concat(packages);
			}
			return webpackConfig;
		},
	},
};
