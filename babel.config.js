module.exports = {
	presets: ["module:@react-native/babel-preset"],
	plugins: [
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
