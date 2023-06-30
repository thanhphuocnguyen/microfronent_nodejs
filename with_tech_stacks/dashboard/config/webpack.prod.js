const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../package.json");
// const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/dashboard/latest/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "dashboard",
			filename: "remoteEntry.js",
			exposes: {
				"./DashBoard": "./src/bootstrap",
			},
			//   shared: ["react", "react-dom"],
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
