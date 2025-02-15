import { ReactNode } from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'

export default ({
  onClick,
  style,
  children,
}: {
  onClick: () => void
  style?: StyleProp<ViewStyle>
  children: ReactNode
}) => {
  return (
    <Pressable
      onPress={onClick}
      style={[
        {
          backgroundColor: '#DDDDDD',
          justifyContent: 'center',
          paddingTop: 16,
          paddingBottom: 18,
          paddingLeft: 16,
          paddingRight: 16,
        },
        style,
      ]}
      android_ripple={{ color: '#CCCCCC' }}
    >
      <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>{children}</Text>
    </Pressable>
  )
}
