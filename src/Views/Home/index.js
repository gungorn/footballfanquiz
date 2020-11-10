import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import D from '../../Dimensions';
import { C1, C2, C3 } from '../../Colors';

import Image from '../Components/Image';

import background from '../../../assets/images/background/1.png';
import logo from '../../../assets/images/logo/logo.png';
import telefon from '../../../assets/images/t1.png';
import B0 from '../../../assets/images/buttons/button.png';
import square from '../../../assets/images/buttons/kare.png'
import rectangle from '../../../assets/images/buttons/dikdörtgen.png'

import B4 from '../../../assets/images/buttons/4.png';
import B3 from '../../../assets/images/buttons/3.png';
import B2 from '../../../assets/images/buttons/2.png';

export default P => {

	return (

		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: C1 }}
		>
			<Image source={background} width={D.w} style={{ position: 'absolute' }} />



			<View style={{ flexDirection: 'row', }}>
				<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
					<Image source={square} height={D.W(12)} />

					<View>
						<Text style={{ color: '#fff', fontSize: 10 }}>Nurettin G.</Text>
						<Text style={{ color: C3, fontFamily: 'Spantaran', fontSize: 10 }}>99 LVL</Text>

						<View style={{ backgroundColor: `${C3}66`, width: '100%', height: 4, borderRadius: 3 }}>
							<View style={{ backgroundColor: C3, position: 'absolute', height: 4, borderRadius: 3, width: '40%' }} />
						</View>
					</View>
				</TouchableOpacity>

				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={rectangle} height={D.W(12)} />
					<View style={{ position: 'absolute', flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ fontWeight: 'bold', color: '#fff', marginRight: 10 }}>5000</Text>
						<FontAwesome name={'diamond'} color={'yellow'} />
					</View>
				</View>

				<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={square} height={D.W(12)} />
					<Ionicons name={'ios-notifications'} size={D.W(5)} color={'gray'} style={{ position: 'absolute' }} />
				</TouchableOpacity>

				<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={square} height={D.W(12)} />
					<Ionicons name={'ios-chatbubbles'} size={D.W(5)} color={'gray'} style={{ position: 'absolute' }} />
				</TouchableOpacity>

				<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={square} height={D.W(12)} />
					<Ionicons name={'ios-settings'} size={D.W(5)} color={'gray'} style={{ position: 'absolute' }} />
				</TouchableOpacity>
			</View>



			<View style={{ alignItems: 'center' }}>
				<Image source={logo} width={D.W(30)} />

				<Image source={telefon} width={D.W(60)} />

				<View style={{ width: D.W(80), alignItems: 'center', backgroundColor: C3, paddingVertical: D.H(1.5), borderRadius: 10 }}>
					<Text style={{ fontFamily: 'Spantaran', color: '#fff', fontSize: D.W(3.5), }}>
						HAFTANIN ODULU - IPHONE 11
					</Text>
				</View>
			</View>



			<View style={{ flexDirection: 'row', marginTop: D.H(2), height: D.W(13) }}>
				<TouchableOpacity style={{ width: D.W(40), justifyContent: 'center', alignItems: 'center' }}>
					<Image source={B0} width={D.W(40)} style={{ transform: [{ rotate: '180deg' }], position: 'absolute' }} />
					<Text style={{ color: '#fff', fontFamily: 'Spantaran' }}>
						RASTGELE YARIS
					</Text>
				</TouchableOpacity>

				<TouchableOpacity style={{ width: D.W(40), justifyContent: 'center', alignItems: 'center' }}>
					<Image source={B0} width={D.W(40)} style={{ position: 'absolute' }} />
					<Text style={{ color: '#fff', fontFamily: 'Spantaran' }}>
						YARISMA SEC
					</Text>
				</TouchableOpacity>
			</View>



			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: D.H(5) }}>
				<TouchableOpacity>
					<Image source={B4} width={D.W(20)} style={{}} />
				</TouchableOpacity>

				<TouchableOpacity style={{ borderColor: 'yellow', borderWidth: 1, marginHorizontal: D.W(4), borderRadius: D.W(4) }}>
					<Image source={B3} width={D.W(30)} style={{}} />
				</TouchableOpacity>

				<TouchableOpacity>
					<Image source={B2} width={D.W(20)} style={{}} />
				</TouchableOpacity>
			</View>

		</View>
	);
}
