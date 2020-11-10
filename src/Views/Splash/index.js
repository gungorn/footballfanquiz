import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import D from '../../Dimensions';

import Login from '../Login';

import Image from '../Components/Image';

import logo from '../../../assets/images/logo/logo.png';

export default P => {
	const { ready } = P;

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: D.H(5) }}>

			<Image source={logo} width={D.W(ready ? 25 : 75)} />

			<Login {...P} />
		</View>
	);
}
