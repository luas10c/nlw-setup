import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

import { useFonts } from 'expo-font'

import { Loading } from '#/components/loading/index'

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular: require('./src/assets/inter/Inter-Regular.ttf'),
    Inter_600SemiBold: require('./src/assets/inter/Inter-SemiBold.ttf'),
    Inter_700Bold: require('./src/assets/inter/Inter-Bold.ttf'),
    Inter_800ExtraBold: require('./src/assets/inter/Inter-ExtraBold.ttf')
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  )
}

export default App
