import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = () => {
	return (
		<View>
			<Text style={styles.title}>Сообщи, где торгуют смертью!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		marginTop: 50,
		marginBottom: 20,
		color: '#d41d22',
		fontFamily: 'a-monumento-titul',
		fontSize: 20,
		textAlign: 'center',
	},
})
