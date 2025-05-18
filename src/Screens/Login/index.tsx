import React from 'react'
import { View } from 'react-native'
import DButton from '../../Components/DButton'
import Screen from '../../Components/Screen'
import { useAuthentication } from '../../Hooks/AuthenticationContext'

const Login = () => {
  const { login } = useAuthentication()
  // const { pushNotification, show, setShow } = usePushNotification()

  // useEffect(() => {
  //   console.log(pushNotification)
  // }, [pushNotification])

  return (
    <Screen authenticationRequired={false}>
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

export default Login
