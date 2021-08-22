import React from 'react'
import { Linking, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'

export const ContactsScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.textHeader}>
				Сообщить о незаконном обороте наркотиков можно по телефонам:
			</Text>
			<Text style={styles.text}>
				&#10063; дежурная часть ОМВД по г.Обнинску:{'\n'}
				<FontAwesome5 name="phone-alt" size={18} color="black" />
				&nbsp;&nbsp;&nbsp;
				<Text onPress={() => Linking.openURL(`tel:${84843949802}`)} style={styles.textBold}>
					8 (484) 394-98-02
				</Text>
			</Text>
			<Text style={styles.text}>
				&#10063; отделение по борьбе с незаконным оборотом наркотиков:{'\n'}
				<FontAwesome5 name="phone-alt" size={18} color="black" />
				&nbsp;&nbsp;&nbsp;
				<Text style={styles.textBold} onPress={() => Linking.openURL(`tel:${84843949850}`)}>
					8 (484) 394-98-50{'\n'}
				</Text>
				<FontAwesome5 name="phone-alt" size={18} color="black" />
				&nbsp;&nbsp;&nbsp;
				<Text style={styles.textBold} onPress={() => Linking.openURL(`tel:${84843949842}`)}>
					8 (484) 394-98-42
				</Text>
			</Text>
			<Text style={styles.text}>
				&#10063; ФГБУЗ КБ№8 ФМБА России:{'\n'}
				<FontAwesome5 name="phone-alt" size={18} color="black" />
				&nbsp;&nbsp;&nbsp;
				<Text style={styles.textBold} onPress={() => Linking.openURL(`tel:${84843960072}`)}>
					8 (484) 396-00-72
				</Text>
			</Text>
			<Text style={styles.text}>
				&#10063; детский телефон доверия:{'\n'}
				<FontAwesome5 name="phone-alt" size={18} color="black" />
				&nbsp;&nbsp;&nbsp;
				<Text style={styles.textBold} onPress={() => Linking.openURL(`tel:${88002000122}`)}>
					8 (800) 200-01-22
				</Text>
			</Text>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingTop: 0,
		flex: 1,
		backgroundColor: '#fff',
	},
	textHeader: {
		fontWeight: 'normal',
		fontFamily: 'open-bold',
		color: '#000',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
	},
	text: {
		marginBottom: 30,
		fontWeight: 'normal',
		fontFamily: 'open-regular',
		color: '#000',
		fontSize: 15,
		textAlign: 'center',
	},
	textBold: {
		fontSize: 18,
		fontFamily: 'open-bold',
		textDecorationLine: 'underline',
	},
})
