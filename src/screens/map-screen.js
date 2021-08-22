import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'

export const MapScreen = () => {
	return (
		<View style={styles.container}>
			<WebView
				source={{
					uri: 'https://w.alkogolizmu.net/?design=86',
				}}
				onError={(err) => console.log(err)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
})
