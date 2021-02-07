import React from 'react'
import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'

export const ContactsScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.textHeader}>
				Сообщить о незаконном обороте наркотиков можно по телефонам:
			</Text>
			<Text style={styles.text}>
				&#10063; дежурная часть ОМВД по г.Обнинску:{'\n'}
				<Text onPress={() => Linking.openURL(`tel:${84843949802}`)} style={styles.textBold}>
					8 (484) 394-98-02
				</Text>
			</Text>
			<Text style={styles.text}>
				&#10063; отделение по борьбе с незаконным оборотом наркотиков:{'\n'}
				<Text style={styles.textBold} onPress={() => Linking.openURL(`tel:${84843949850}`)}>
					8 (484) 394-98-50{'\n'}
				</Text>
				<Text style={styles.textBold} onPress={() => Linking.openURL(`tel:${84843949842}`)}>
					8 (484) 394-98-42
				</Text>
			</Text>
			<Text style={styles.text}>
				&#10063; ФГБУЗ КБ№8 ФМБА России:{'\n'}
				<Text style={styles.textBold} onPress={() => Linking.openURL(`tel:${84843960072}`)}>
					8 (484) 396-00-72
				</Text>
			</Text>
			<Text style={styles.text}>
				&#10063; детский телефон доверия:{'\n'}
				<Text style={styles.textBold} onPress={() => Linking.openURL(`tel:${88002000122}`)}>
					8 (800) 200-01-22
				</Text>
			</Text>
			<TextInput style={styles.input} placeholder="Имя" />
			<TextInput style={styles.input} placeholder="Электронная почта" />
			<TextInput style={styles.input} placeholder="Телефон" />
			<TextInput style={styles.input} placeholder="Сообщение" multiline />
			<Button title="Отправить" color="#d41d22" style={styles.btn} />
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
		marginBottom: 10,
		fontWeight: 'normal',
		fontFamily: 'open-regular',
		color: '#000',
		fontSize: 15,
	},
	textBold: {
		fontFamily: 'open-bold',
		textDecorationLine: 'underline',
		textDecorationStyle: 'dashed',
	},
	input: {
		width: '100%',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#aaa',
		paddingVertical: 5,
		paddingLeft: 10,
		marginBottom: 10,
	},
	btn: {
		fontWeight: 'normal',
		fontFamily: 'open-regular',
	},
})
