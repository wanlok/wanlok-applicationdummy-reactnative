import React, { useEffect } from 'react'
import { View } from 'react-native'
import { usePushNotification } from '../../Hooks/PushNotificationContext'
import DButton from '../../Components/DButton'
import Screen from '../../Components/Screen'
import { useAuthentication } from '../../Hooks/AuthenticationContext'

const Home = () => {
  const { login } = useAuthentication()
  const { pushNotification, show, setShow } = usePushNotification()

  useEffect(() => {
    console.log(pushNotification)
  }, [pushNotification])

  return (
    <Screen>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <DButton onClick={login}>Login</DButton>
      </View>
    </Screen>
  )
}

export default Home
