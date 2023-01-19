import { View } from 'react-native'

interface Props {
  value?: number
}

export const ProgressBar = (props: Props) => {
  const { value = 0 } = props

  return (
    <View className="relative w-full h-3 rounded-xl bg-zinc-700 mt-4 overflow-hidden">
      <View
        className="absolute top-0 left-0 h-3 bg-violet-500"
        style={{ width: `${value}%` }}
      />
    </View>
  )
}
