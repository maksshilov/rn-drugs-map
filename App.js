import 'react-native-gesture-handler'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { bootstrap } from './src/bootstrap'
import { WebView } from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MapScreen } from './src/screens/map-screen'
import { AboutScreen } from './src/screens/about-screen'
import { Header } from './src/components/Header'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { ContactsScreen } from './src/screens/contacts-screen'
import { NewsScreen } from './src/screens/news-screen'
import { TeamScreen } from './src/screens/team-screen'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

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
					shifting={false}
					barStyle={styles.barBottom}
					activeColor="#d41d22"
					inactiveColor="#5c96de"
				>
					<Tab.Screen
						name="News"
						component={NewsScreen}
						options={{
							tabBarLabel: 'Новости',
							tabBarIcon: ({ color }) => (
								<Ionicons name="newspaper-outline" size={24} color={color} />
							),
						}}
					/>
					<Tab.Screen
						name="Contacts"
						component={ContactsScreen}
						options={{
							tabBarLabel: 'Сообщить',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons
									name="pencil-box-multiple-outline"
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
							tabBarLabel: 'Карта',
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
						name="Team"
						component={TeamScreen}
						options={{
							tabBarLabel: 'Команда',
							tabBarIcon: ({ color }) => (
								<MaterialIcons
									name="groups"
									size={24}
									color="black"
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
