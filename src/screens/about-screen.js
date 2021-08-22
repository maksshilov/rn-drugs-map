import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AboutScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.textHeader}>Дорогие друзья!</Text>
			<Text style={styles.text}>
				Наш проект посвящён такой злободневной теме, как профилактика распространения и
				употребления психоактивных веществ. Только совместными усилиями мы сможем
				акцентировать внимание на проблемных участках, увидеть полную картину и добиться
				улучшения состояния общества. Наша команда постаралась сделать процесс добавления
				максимально удобным и быстрым. Не сомневаетесь, что все полученные от вас сигналы
				будут переданы сотрудникам ГУНК.
			</Text>
			<Text style={styles.text}>
				Наш проект всегда открыт для новых идей, если у вас возникнут пожелания или
				предложения относительно развития проекта, то мы с радостью их рассмотрим.
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		paddingHorizontal: 50,
		flex: 1,
		alignItems: 'center',
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
