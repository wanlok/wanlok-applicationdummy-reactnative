import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DPage from '../../Components/DPage'
import DButton from '../../Components/DButton'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  return (
    <DPage>
      <DButton onClick={() => navigation.navigate('Application')}>Application</DButton>
    </DPage>
  )
}
