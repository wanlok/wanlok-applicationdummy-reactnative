import { StyleProp, TextInput, ViewStyle } from 'react-native'

export default ({
  placeholder,
  value,
  onChange,
  style,
}: {
  placeholder: string
  value: string
  onChange: (text: string) => void
  style?: StyleProp<ViewStyle>
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      style={[
        {
          borderColor: '#CCCCCC',
          borderWidth: 1,
          color: 'black',
          backgroundColor: 'white',
          padding: 16,
          fontSize: 16,
        },
        style,
      ]}
    />
  )
}
