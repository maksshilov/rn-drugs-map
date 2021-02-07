import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TeamScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.textHeader}>TEAM</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 50,
		flex: 1,
		alignItems: 'center',
		// justifyContent: 'center',
	},
	textHeader: {
		fontWeight: 'normal',
		fontFamily: 'open-bold',
		color: '#000',
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 20,
	},
	text: {
		marginBottom: 20,
		fontWeight: 'normal',
		fontFamily: 'open-regular',
		color: '#000',
		fontSize: 15,
		textAlign: 'center',
	},
})
