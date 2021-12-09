import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

class App extends React.Component {
  webview = null
  render() {
    return (
      <WebView
        ref={(ref) => {
          this.webview = ref
        }}
        javaScriptEnabled={true}
        style={styles.container}
        source={{ uri: 'https://www.flyfishfinder.com/auth' }}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />
    )
  }

  handleWebViewNavigationStateChange = (navState) => {
    const { url } = navState

    if (!url) return

    if (url === 'https://blog.flyfishfinder.com/') {
      console.log('here')
      const newURL = 'https://www.flyfishfinder.com/auth'
      const redirectTo = 'window.location = "' + newURL + '"'
      this.webview.injectJavaScript(redirectTo)
    }
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
