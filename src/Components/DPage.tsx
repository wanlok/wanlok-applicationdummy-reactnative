import { ReactNode } from 'react'
import { View } from 'react-native'

export default ({ children }: { children: ReactNode }) => {
  return <View style={{ padding: 16, flex: 1 }}>{children}</View>
}
