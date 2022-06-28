import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import * as Location from 'expo-location'
import { WebView } from 'react-native-webview'

export const MapScreen = ({ location, setLocation }) => {
	async function askLocationPermission() {
		const { status } = await Location.requestForegroundPermissionsAsync()
		console.log('status >>', status)
		setLocation(() => status)
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<View style={{ flex: 1 }}>
				{location !== 'granted' ? (
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ fontFamily: 'open-bold', fontSize: 15, color: '#555' }}>
							Требуется доступ к геопозиции
						</Text>

						<TouchableOpacity
							onPress={askLocationPermission}
							style={{
								backgroundColor: 'tomato',
								padding: 10,
								borderRadius: 10,
								marginTop: 20,
							}}
						>
							<Text
								style={{
									fontFamily: 'open-bold',
									fontSize: 15,
									color: '#000',
									textAlign: 'center',
								}}
							>
								Дать доступ к геопозиции
							</Text>
						</TouchableOpacity>

						<Text
							style={{
								fontFamily: 'open-bold',
								fontSize: 10,
								color: '#555',
								marginTop: 20,
							}}
						>
							или измените доступ в настройках телефона
						</Text>
					</View>
				) : (
					<WebView
						style={{ flex: 1 }}
						source={{ uri: 'https://w.alkogolizmu.net/?design=86' }}
						javaScriptEnabled={true}
						domStorageEnabled={true}
						onError={(err) => console.log(err)}
					/>
				)}
			</View>
		</SafeAreaView>
	)
}
