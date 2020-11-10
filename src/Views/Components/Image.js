import React, { useState, useEffect } from 'react';

import { Image, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

const ImagePlus = props => {
	const { source, style, resizeMode, onSize, fi } = props;
	let { width, height } = props;

	const [WH, setWH] = useState(null);
	let tmp;

	useEffect(() => {
		if (width && height) setWH({ width, height });
		else if (typeof source === 'object') {
			Image.getSize(source.uri,
				(ow, oh) => {
					tmp = width ? { width, height: width * (oh / ow) } : { width: height * (ow / oh), height };
					setWH(tmp);
					onSize(tmp);
				});
		}
		else {
			const T = Image.resolveAssetSource(source);
			tmp = width ? { width, height: width * (T.height / T.width) } : { width: height * (T.width / T.height), height };
			setWH(tmp);
			onSize(tmp);
		}
	}, [width, height, source]);

	return WH ?
		(
			fi ?
				<FastImage source={source} style={[WH, style]} resizeMode={resizeMode} /> :
				<Image source={source} style={[WH, style]} resizeMode={resizeMode} />
		)
		:
		<View style={{ width, height }} />;
}

ImagePlus.propTypes = { width: PropTypes.number, height: PropTypes.number, onSize: PropTypes.func, fi: PropTypes.bool };
ImagePlus.defaultProps = { width: null, height: null, onSize: () => null, fi: true };

export default ImagePlus;
