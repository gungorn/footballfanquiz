import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import D from '../../Dimensions';
import { C1, C2, C3, FB, GP, TW } from '../../Colors';

export default P => {
	const { ready, setLoggedin } = P;

	return (
		<View style={{
			//display: ready ? 'flex' : 'none',
			width: D.W(70),
			height: ready ? undefined : 0,
			overflow: 'hidden',
			marginTop: D.H(5),
			//borderWidth: 2,
			borderColor: 'red'
		}}>
			<Text style={{ fontFamily: 'Spantaran', color: C3, fontSize: D.W(10), textAlign: 'center' }}>
				GIRIS YAP
			</Text>

			<Text style={{ textAlign: 'center', color: C3 }}>
				{'\n'}
				Giriş yaparak sılamada yerinizi alın ve bir çok ödülün sahibi olun.
				</Text>

			<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: D.H(5) }}>
				<TouchableOpacity style={{ backgroundColor: FB, paddingHorizontal: D.W(5), paddingVertical: D.H(1), borderRadius: D.w }}>
					<EvilIcons name={'sc-facebook'} color={'#fff'} size={32} />
				</TouchableOpacity>
				<View style={{ width: 10 }} />
				<TouchableOpacity style={{ backgroundColor: TW, paddingHorizontal: D.W(5), paddingVertical: D.H(1), borderRadius: D.w }}>
					<EvilIcons name={'sc-twitter'} color={'#fff'} size={32} />
				</TouchableOpacity>
				<View style={{ width: 10 }} />
				<TouchableOpacity style={{ backgroundColor: GP, paddingHorizontal: D.W(5), paddingVertical: D.H(1), borderRadius: D.w }}>
					<EvilIcons name={'sc-google-plus'} color={'#fff'} size={32} />
				</TouchableOpacity>
			</View>

			<TextInput
				style={{ borderWidth: 3, borderColor: C3, borderRadius: D.w, backgroundColor: C1, paddingLeft: D.W(5), marginTop: D.H(2) }}
				placeholder={'Kullanıcı Adı'}
				placeholderTextColor={C3}
			/>

			<TextInput
				style={{ borderWidth: 3, borderColor: C3, borderRadius: D.w, backgroundColor: C1, paddingLeft: D.W(5), marginTop: D.H(1) }}
				placeholder={'Şifre'}
				placeholderTextColor={C3}
			/>

			<TextInput
				style={{ borderWidth: 3, borderColor: C3, borderRadius: D.w, backgroundColor: C1, paddingLeft: D.W(5), marginTop: D.H(1) }}
				placeholder={'Şifre Tekrar'}
				placeholderTextColor={C3}
			/>


			<TouchableOpacity
				style={{ backgroundColor: C3, borderRadius: D.w, paddingVertical: D.H(2), justifyContent: 'center', alignItems: 'center', marginTop: D.H(5) }}
				onPress={() => setLoggedin(true)}
			>
				<Text style={{ color: '#fff', fontWeight: 'bold', fontSize: D.W(5) }}>GİRİŞ YAP</Text>
			</TouchableOpacity>
		</View>
	);
}
