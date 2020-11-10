import React, { useEffect, useState } from 'react';
import { LayoutAnimation, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import D from '../Dimensions';
import { C1, C2 } from '../Colors';

import Navigation from './Navigation';
import Splash from './Splash';

import Image from './Components/Image';

import background from '../../assets/images/background/1.png';


export default P => {
	const [ready, setReady] = useState(false); //true: login, false: splash
	const [loggedin, setLoggedin] = useState(false); //true: navigation

	useEffect(() => {
		setTimeout(() => setReady(true), 2500);

		return () => { };
	}, []);

	useEffect(() => LayoutAnimation.easeInEaseOut());


	return (
		<>
			<StatusBar hidden translucent backgroundColor={'transparent'} />

			<LinearGradient
				start={{ x: 1, y: 0 }}
				end={{ x: 0, y: 1 }}
				colors={[C1, C1]}
				style={{ flex: 1, justifyContent: 'center' }}
			>
				<Image source={background} width={D.w} style={{ position: 'absolute' }} />



				{
					loggedin ?
						<Navigation /> :
						<Splash ready={ready} setLoggedin={setLoggedin} />
				}
			</LinearGradient>
		</>
	);
}
