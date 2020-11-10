import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';

const stack1 = createStackNavigator();

export default P => {

	return (
		<NavigationContainer>
			<stack1.Navigator screenOptions={{ headerShown: false }}>
				<stack1.Screen name={'Home'} component={Home} />
			</stack1.Navigator>
		</NavigationContainer>
	);
}
