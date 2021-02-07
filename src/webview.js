import React, { Component } from 'react'
import { WebView } from 'react-native-webview'

export class MyWeb extends Component {
	render() {
		return <WebView source={{ uri: 'https://infinite.red' }} style={{ marginTop: 20 }} />
	}
}
