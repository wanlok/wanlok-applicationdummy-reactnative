import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Color, Size } from '../../Components/Styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { data } from '../../Data'
import { useEffect } from 'react'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 0.5,
    padding: 16,
    backgroundColor: '#EEEEEE',
  },
  columnLeft: {
    alignItems: 'flex-start',
  },
  columnRight: {
    alignItems: 'flex-end',
  },
})

const LoanList = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList>
}) => {
  const { bottom } = useSafeAreaInsets()

  useEffect(() => {
    navigation.setOptions({ title: 'Loans' })
  }, [navigation])

  return (
    <FlatList
      style={{ marginBottom: bottom }}
      data={data}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              navigation.navigate('LoanDetails', { index })
            }}
            style={[
              {
                padding: 16,
                backgroundColor: '#FFFFFF',
              },
              index > 0 ? { marginTop: 8 } : {},
            ]}
            android_ripple={{ color: '#CCCCCC' }}
          >
            <Text style={[Color.text, Size.smaller]}>Loan {index + 1}</Text>
            <View style={{ marginTop: 8 }}>
              <Text style={[Color.text, Size.larger]}>{item.address}</Text>
            </View>
            <View style={{ marginTop: 12 }}>
              <Text style={[Color.text, Size.regular]}>
                {item.bsb} {item.accountNumber}
              </Text>
            </View>
            <View style={[styles.row, { marginTop: 16 }]}>
              <View style={[styles.column, styles.columnLeft]}>
                <Text style={[Color.text, Size.regular]}>Amount</Text>
              </View>
              <View style={[styles.column, styles.columnRight]}>
                <Text style={[Color.text, Size.regular]}>{item.amount}</Text>
              </View>
            </View>
            <View style={[styles.row, { marginTop: 2 }]}>
              <View style={[styles.column, styles.columnLeft]}>
                <Text style={[Color.text, Size.regular]}>Balance</Text>
              </View>
              <View style={[styles.column, styles.columnRight]}>
                <Text style={[Color.text, Size.regular]}>{item.balance}</Text>
              </View>
            </View>
          </Pressable>
        )
      }}
      keyExtractor={item => item.accountNumber}
    />
  )
}

export default LoanList
