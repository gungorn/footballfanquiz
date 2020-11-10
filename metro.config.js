// eslint-disable-next-line no-undef
module.exports = {
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false,
			},
		}),
	},
};
