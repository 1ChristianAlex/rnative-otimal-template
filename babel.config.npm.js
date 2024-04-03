module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }],
		"@babel/preset-react",
		"@babel/preset-typescript",
	],
	plugins: [
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-transform-flow-strip-types",
		"transform-inline-environment-variables",
		// "transform-remove-console",
		[
			"module-resolver",
			{
				root: ["./src"],
				extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
				alias: {
					tests: ["./tests/"],
					"@components": "./src/shared/components",
					"@pages": "./src/pages",
					"@hooks": "./src/shared/hooks",
					"@shared": "./src/shared",
					"@core": "./src/core",
				},
			},
		],
		"nativewind/babel",
	],
};
