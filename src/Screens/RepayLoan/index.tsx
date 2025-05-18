import { RouteProp } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import TwoColumnList from '../../Components/TwoColumnList'
import { data } from '../../Data'
import { Color, Size } from '../../Styles'
import DButton from '../../Components/DButton'
import Screen from '../../Components/Screen'
import { RootStackParamList } from '../../Components/Navigation'
import DTextField from '../../Components/DTextField'

const RepayLoan = ({
  route,
  navigation,
}: {
  route: RouteProp<RootStackParamList, 'RepayLoan'>
  navigation: NativeStackNavigationProp<RootStackParamList>
}) => {
  const { index } = route.params

  const loan = data[index]

  useEffect(() => {
    navigation.setOptions({ title: loan.address })
  }, [index, navigation])

  const [amount, setAmount] = useState('1200')

  return (
    <Screen navigation={navigation}>
      <ScrollView>
        <Text style={[Color.text, Size.banner, { textAlign: 'center', marginTop: 32 }]}>
          $1,200.00
        </Text>
        <Text style={[Color.text, Size.regular, { padding: 16, textAlign: 'center' }]}>
          The next repayment is due on {loan.nextRepaymentDate}
        </Text>
        <Text style={[Color.text, Size.small, { fontWeight: 'bold', padding: 16 }]}>
          Repay Amount
        </Text>
        <DTextField
          placeholder={''}
          value={amount}
          onChange={amount => {
            setAmount(amount)
          }}
          style={{ marginLeft: 16, marginRight: 16 }}
        />
        <DButton onClick={() => {}} style={{ margin: 16 }}>
          Submit
        </DButton>
      </ScrollView>
    </Screen>
  )
}

export default RepayLoan
