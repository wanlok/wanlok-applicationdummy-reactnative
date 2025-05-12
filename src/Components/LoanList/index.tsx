import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'

const data = [
  {
    address: '123 Main St, Sydney, NSW 2000',
    bsb: '123-456',
    accountNumber: '111111111',
    lvr: '10%',
    balance: '$111,111.00',
  },
  {
    address: '456 Elm St, Melbourne, VIC 3000',
    bsb: '123-456',
    accountNumber: '222222222',
    lvr: '20%',
    balance: '$222,222.00',
  },
  {
    address: '789 Oak St, Brisbane, QLD 4000',
    bsb: '123-456',
    accountNumber: '333333333',
    lvr: '30%',
    balance: '$333,333.00',
  },
  {
    address: '101 Pine St, Perth, WA 6000',
    bsb: '123-456',
    accountNumber: '444444444',
    lvr: '40%',
    balance: '$444,444.00',
  },
  {
    address: '202 Maple St, Adelaide, SA 5000',
    bsb: '123-456',
    accountNumber: '555555555',
    lvr: '50%',
    balance: '$555,555.00',
  },
  {
    address: '303 Birch St, Hobart, TAS 7000',
    bsb: '123-456',
    accountNumber: '666666666',
    lvr: '60%',
    balance: '$666,666.00',
  },
  {
    address: '404 Cedar St, Darwin, NT 8000',
    bsb: '123-456',
    accountNumber: '777777777',
    lvr: '70%',
    balance: '$777,777.00',
  },
  {
    address: '505 Spruce St, Canberra, ACT 2600',
    bsb: '123-456',
    accountNumber: '888888888',
    lvr: '80%',
    balance: '$888,888.00',
  },
  {
    address: '606 Fir St, Gold Coast, QLD 4217',
    bsb: '123-456',
    accountNumber: '999999999',
    lvr: '90%',
    balance: '$999,999.00',
  },
]

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  containerSpacing: {
    marginTop: 8,
  },
  row: {
    marginTop: 16,
    flexDirection: 'row',
  },
  column: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#EEEEEE',
  },
  address: {
    marginTop: 4,
  },
  accountDetails: {
    marginTop: 8,
  },
  spaces: {
    width: 2,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000000',
  },
  smaller: {
    fontSize: 14,
    lineHeight: 22,
  },
  regular: {
    fontSize: 16,
  },
  larger: {
    fontSize: 20,
  },
})

const LoanList = () => {
  const refreshControl = <RefreshControl refreshing={true} onRefresh={() => {}} />

  return (
    <FlatList
      refreshControl={refreshControl}
      data={data}
      renderItem={({ item, index }) => {
        return (
          <View style={[styles.container, index > 0 ? styles.containerSpacing : {}]}>
            <Text style={[styles.text, styles.smaller]}>Loan {index + 1}</Text>
            <View style={styles.address}>
              <Text style={[styles.text, styles.larger]}>{item.address}</Text>
            </View>
            <View style={styles.accountDetails}>
              <Text style={[styles.text, styles.regular]}>
                {item.bsb} {item.accountNumber}
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={[styles.text, styles.smaller]}>LVR: </Text>
                <Text style={[styles.text, styles.regular]}>{item.lvr}</Text>
              </View>
              <View style={styles.spaces} />
              <View style={styles.column}>
                <Text style={[styles.text, styles.smaller]}>Balance: </Text>
                <Text style={[styles.text, styles.regular]}>{item.balance}</Text>
              </View>
            </View>
          </View>
        )
      }}
      keyExtractor={item => item.accountNumber}
    />
  )
}

export default LoanList
