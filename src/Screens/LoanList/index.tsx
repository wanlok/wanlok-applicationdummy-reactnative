import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Color, Size } from '../../Components/Styles'

const data = [
  {
    address: '123 Main St, Sydney, NSW 2000',
    bsb: '123-456',
    accountNumber: '111111111',
    amount: '$100,000.00',
    balance: '$111,111.00',
  },
  {
    address: '456 Elm St, Melbourne, VIC 3000',
    bsb: '123-456',
    accountNumber: '222222222',
    amount: '$200,000.00',
    balance: '$222,222.00',
  },
  {
    address: '789 Oak St, Brisbane, QLD 4000',
    bsb: '123-456',
    accountNumber: '333333333',
    amount: '$300,000.00',
    balance: '$333,333.00',
  },
  {
    address: '101 Pine St, Perth, WA 6000',
    bsb: '123-456',
    accountNumber: '444444444',
    amount: '$400,000.00',
    balance: '$444,444.00',
  },
  {
    address: '202 Maple St, Adelaide, SA 5000',
    bsb: '123-456',
    accountNumber: '555555555',
    amount: '$500,000.00',
    balance: '$555,555.00',
  },
  {
    address: '303 Birch St, Hobart, TAS 7000',
    bsb: '123-456',
    accountNumber: '666666666',
    amount: '$600,000.00',
    balance: '$666,666.00',
  },
  {
    address: '404 Cedar St, Darwin, NT 8000',
    bsb: '123-456',
    accountNumber: '777777777',
    amount: '$700,000.00',
    balance: '$777,777.00',
  },
  {
    address: '505 Spruce St, Canberra, ACT 2600',
    bsb: '123-456',
    accountNumber: '888888888',
    amount: '$800,000.00',
    balance: '$888,888.00',
  },
  {
    address: '606 Fir St, Gold Coast, QLD 4217',
    bsb: '123-456',
    accountNumber: '999999999',
    amount: '$900,000.00',
    balance: '$999,999.00',
  },
]

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

const LoanList = () => {
  const { bottom } = useSafeAreaInsets()
  return (
    <FlatList
      style={{ marginBottom: bottom }}
      data={data}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            // onPress={onClick}
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
