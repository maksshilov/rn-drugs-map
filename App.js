import 'react-native-gesture-handler'
import React from 'react'
import * as Location from 'expo-location'
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
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
	const [appIsReady, setAppIsReady] = React.useState(false)
	const [location, setLocation] = React.useState(false)

	React.useEffect(() => {
		async function prepare() {
			try {
				// Keep the splash screen visible while we fetch resources
				await SplashScreen.preventAutoHideAsync()
				// Pre-load fonts, make any API calls you need to do here
				await bootstrap()
				// Artificially delay for two seconds to simulate a slow loading
				// experience. Please remove this if you copy and paste the code!
				await new Promise((resolve) => setTimeout(resolve, 2000))
			} catch (e) {
				console.warn(e)
			} finally {
				// Tell the application to render
				setAppIsReady(true)
				await SplashScreen.hideAsync()
			}
		}

		prepare()
	}, [])

	async function getLocationPermission() {
		if (appIsReady) {
			const { status } = await Location.getForegroundPermissionsAsync()
			if (status !== 'granted') {
				const { status } = await Location.requestForegroundPermissionsAsync()
				setLocation(() => status)
			}
			setLocation(() => status)
		}
	}

	React.useEffect(() => {
		getLocationPermission()
	}, [appIsReady])

	if (!appIsReady) {
		return null
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
					>
						{() => <MapScreen location={location} setLocation={setLocation} />}
					</Tab.Screen>
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
