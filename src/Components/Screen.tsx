import { ReactNode } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default ({ children }: { children: ReactNode }) => {
  const { bottom } = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={[{ flex: 1, marginBottom: bottom }]}>{children}</View>
    </View>
  )
}
