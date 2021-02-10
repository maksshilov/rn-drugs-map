import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import MapView from 'react-native-maps'

export const MapScreen = () => {
	return (
		<View style={styles.container}>
			<WebView
				// originWhitelist={['*']}
				source={{
					uri: 'https://w.alkogolizmu.net/?design=86',
				}}
				onError={(err) => console.log(err)}
			/>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// marginTop: 10,
		width: '100%',
		height: '100%',
	},
})
