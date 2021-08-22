import * as Font from 'expo-font'

export async function bootstrap() {
	await Font.loadAsync({
		'comfortaa-regular': require('../assets/fonts/Comfortaa-Regular.ttf'),
		'a-monumento-titul': require('../assets/fonts/a_MonumentoTitul-Bold.ttf'),
		'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
		'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
	})
}
