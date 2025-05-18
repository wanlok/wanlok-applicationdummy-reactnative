import { RouteProp } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'
import { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import TwoColumnList from '../../Components/TwoColumnList'
import { data } from '../../Data'
import { Color, Size } from '../../Styles'
import DButton from '../../Components/DButton'
import Screen from '../../Components/Screen'
import { RootStackParamList } from '../../Components/Navigation'

const LoanDetails = ({
  route,
  navigation,
}: {
  route: RouteProp<RootStackParamList, 'LoanDetails'>
  navigation: NativeStackNavigationProp<RootStackParamList>
}) => {
  const { index } = route.params

  const loan = data[index]

  useEffect(() => {
    navigation.setOptions({ title: loan.address })
  }, [index, navigation])

  return (
    <Screen navigation={navigation}>
      <ScrollView>
        <Text style={[Color.text, Size.banner, { textAlign: 'center', marginTop: 32 }]}>
          $1,200.00
        </Text>
        <Text style={[Color.text, Size.regular, { padding: 16, textAlign: 'center' }]}>
          The next repayment is due on {loan.nextRepaymentDate}
        </Text>
        <Text style={[Color.text, Size.small, { fontWeight: 'bold', padding: 16 }]}>Actions</Text>
        <View style={{ flexDirection: 'row', height: 120 }}>
          <DButton
            style={{ flex: 1 }}
            onClick={() => {
              navigation.navigate('RepayLoan', route.params)
            }}
          >
            Repay Loan
          </DButton>
          <View style={{ width: 2 }} />
          <DButton style={{ flex: 1 }} onClick={() => {}}>
            Notification Settings
          </DButton>
          <View style={{ width: 2 }} />
          <DButton style={{ flex: 1 }} onClick={() => {}}>
            Repayment History
          </DButton>
        </View>
        <Text style={[Color.text, Size.small, { fontWeight: 'bold', padding: 16 }]}>
          Loan Details
        </Text>
        <TwoColumnList
          keyPrefix="loanDetails"
          data={[
            { label: 'Amount', value: loan.amount },
            { label: 'Term', value: loan.term },
            { label: 'Interest Rate', value: loan.interestRate },
            { label: 'Balance', value: loan.balance },
          ]}
        />
        <Text style={[Color.text, Size.small, { fontWeight: 'bold', padding: 16 }]}>
          Property and Bank Information
        </Text>
        <TwoColumnList
          keyPrefix="propertyAndBankInformation"
          data={[
            { label: 'Address', value: loan.address },
            { label: 'BSB', value: loan.bsb },
            { label: 'Account Number', value: loan.accountNumber },
          ]}
        />
      </ScrollView>
    </Screen>
  )
}

export default LoanDetails
