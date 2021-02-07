import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import MapView from 'react-native-maps'

export const MapScreen = () => {
	return (
		<View style={styles.container}>
			<WebView
				originWhitelist={['*']}
				source={{
					html:
						'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5d63f98036e5b6bb66cd2cac156df35079343ae3472ff08df65c4d77d019dcf3&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"></script>',
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
