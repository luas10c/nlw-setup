import { View, ActivityIndicator } from 'react-native'

export const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size={48} color="rgb(127, 74, 226)" />
    </View>
  )
}
