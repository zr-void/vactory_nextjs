module.exports = async ({ config }) => {
	// config.resolve.extensions.push('.svg');

	// config.module.rules = config.module.rules.map( data => {
	//     if (/svg\|/.test( String( data.test ) ))
	//         data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

	//     return data;
	// });

	// config.module.rules.push({
	//     test: /\.svg$/,
	//     use: [{ loader: require.resolve('babel-loader') },
	//           { loader: require.resolve('react-svg-loader') }]
	// });

	config.resolve.alias["@vactory/ui/theme-context"] = "../context/theme-context.js"
	config.resolve.alias["@vactory/ui/theme"] = "../theme/theme.js"
	config.resolve.alias["@vactory/ui/icon"] = "../icon/icon.js"

	return config
}
