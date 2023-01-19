import { StatusBar } from 'expo-status-bar'
import './lib/dayjs'

import { useFonts } from 'expo-font'

import { Loading } from '#/components/loading/index'

import { Routes } from './routes'

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular: require('./assets/inter/Inter-Regular.ttf'),
    Inter_500SemiBold: require('./assets/inter/Inter-SemiBold.ttf'),
    Inter_700Bold: require('./assets/inter/Inter-Bold.ttf'),
    Inter_800ExtraBold: require('./assets/inter/Inter-ExtraBold.ttf')
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  )
}

export default App
