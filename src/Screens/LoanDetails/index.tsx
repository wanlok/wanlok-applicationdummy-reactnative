import { RouteProp } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../../App'
import { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const LoanDetails = ({
  route,
  navigation,
}: {
  route: RouteProp<RootStackParamList, 'LoanDetails'>
  navigation: NativeStackNavigationProp<RootStackParamList>
}) => {
  const { index } = route.params

  useEffect(() => {
    navigation.setOptions({ title: 'Loan Details' })
  }, [index, navigation])

  return (
    <View>
      <Text>Hello World {index}</Text>
    </View>
  )
}

export default LoanDetails
