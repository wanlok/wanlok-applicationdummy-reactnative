import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DPage from '../../Components/DPage'
import DButton from '../../Components/DButton'
import { usePushNotification } from '../../Components/PushNotification/PushNotificationContext'
import { useEffect } from 'react'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { pushNotification } = usePushNotification()

  useEffect(() => {
    console.log(pushNotification)
  }, [pushNotification])

  return (
    <DPage>
      <DButton onClick={() => navigation.navigate('Application')}>Application</DButton>
    </DPage>
  )
}
