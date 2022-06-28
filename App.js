import 'react-native-gesture-handler'
import React from 'react'
import AppLoading from 'expo-app-loading'
import * as Permissions from 'expo-permissions'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { bootstrap } from './src/bootstrap'
import { ContactsScreen } from './src/screens/contacts-screen'
import { MapScreen } from './src/screens/map-screen'
import { AboutScreen } from './src/screens/about-screen'
import { Header } from './src/components/Header'

// last

export default function App() {
	const [isReady, setIsReady] = React.useState(false)

	if (!isReady) {
		return (
			<AppLoading
				startAsync={bootstrap}
				onFinish={() => setIsReady(true)}
				onError={(err) => console.log(err)}
			></AppLoading>
		)
	}

	const Tab = createMaterialBottomTabNavigator()

	return (
		<React.Fragment>
			<Header />
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName="Map"
					shifting={true}
					barStyle={styles.barBottom}
					activeColor="#d41d22"
					inactiveColor="#5c96de"
				>
					<Tab.Screen
						name="Contacts"
						component={ContactsScreen}
						options={{
							tabBarLabel: 'Сообщить',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons
									name="phone-in-talk"
									size={24}
									color={color}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="Map"
						component={MapScreen}
						options={{
							tabBarLabel: 'Отметить на карте',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons
									name="map-marker-radius"
									size={24}
									color={color}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="About"
						component={AboutScreen}
						options={{
							tabBarLabel: 'О проекте',
							tabBarIcon: ({ color }) => (
								<Ionicons
									name="information-circle-outline"
									size={24}
									color={color}
								/>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" />
		</React.Fragment>
	)
}

const styles = StyleSheet.create({
	barBottom: {
		backgroundColor: '#fff',
		borderTopWidth: 5,
		borderColor: '#5c96de',
	},
})
