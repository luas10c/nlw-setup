import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '#/screens/home'
import { ViewHabit } from '#/screens/view-habit'
import { CreateHabit } from '#/screens/create-habit'

const Stack = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ViewHabit" component={ViewHabit} />
      <Stack.Screen name="CreateHabit" component={CreateHabit} />
    </Stack.Navigator>
  )
}
