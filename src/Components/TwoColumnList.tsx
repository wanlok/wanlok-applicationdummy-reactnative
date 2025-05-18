import { StyleSheet, Text, View } from 'react-native'
import { Color, Size } from './Styles'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    padding: 16,
    backgroundColor: Color.row.color,
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
    flex: 1,
  },
})

const TwoColumnList = ({
  data,
  marginTop = 0,
}: {
  data: { label: string; value: string }[]
  marginTop?: number
}) => {
  return data.map(({ label, value }, index) => (
    <View style={[styles.row, { marginTop: index > 0 ? 2 : marginTop }]}>
      <Text style={[styles.column, styles.left, Color.text, Size.regular]}>{label}</Text>
      <Text style={[styles.column, styles.right, Color.text, Size.regular]}>{value}</Text>
    </View>
  ))
}

export default TwoColumnList
