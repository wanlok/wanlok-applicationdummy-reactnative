import { FlatList, Pressable, Text, View } from 'react-native'
import { Color, Size } from '../../Styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { data } from '../../Data'
import { useEffect } from 'react'
import TwoColumnList from '../../Components/TwoColumnList'
import Screen from '../../Components/Screen'
import { RootStackParamList } from '../../Components/Navigation'

const LoanList = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList>
}) => {
  useEffect(() => {
    navigation.setOptions({ title: 'Loans' })
  }, [navigation])

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              key={`loan${index}`}
              onPress={() => {
                navigation.navigate('LoanDetails', { index })
              }}
              style={[
                {
                  padding: 16,
                  backgroundColor: '#EEEEEE',
                },
                index > 0 ? { marginTop: 8 } : {},
              ]}
              android_ripple={{ color: '#CCCCCC' }}
            >
              <Text style={[Color.text, Size.small]}>Loan {index + 1}</Text>
              <Text style={[Color.text, Size.large, { marginTop: 8 }]}>{item.address}</Text>
              <TwoColumnList
                data={[
                  { label: 'Amount', value: item.amount },
                  { label: 'Balance', value: item.balance },
                ]}
                marginTop={16}
              />
            </Pressable>
          )
        }}
        keyExtractor={item => item.accountNumber}
      />
    </Screen>
  )
}

export default LoanList
