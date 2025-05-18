import { ReactNode } from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'
import { Color, Size } from './Styles'

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
          backgroundColor: Color.row.color,
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
      <Text style={[Color.text, Size.regular, { textAlign: 'center', lineHeight: 24 }]}>
        {children}
      </Text>
    </Pressable>
  )
}
