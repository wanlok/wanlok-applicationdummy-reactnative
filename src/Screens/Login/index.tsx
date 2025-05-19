import React from 'react'
import { Text, View } from 'react-native'
import DButton from '../../Components/DButton'
import Screen from '../../Components/Screen'
import { useAuthentication } from '../../Hooks/AuthenticationContext'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Components/Navigation'
import { Color, Size } from '../../Styles'

const Login = ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { authenticated, login } = useAuthentication()

  return (
    <Screen navigation={navigation} authenticationRequired={false}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EEEEEE',
        }}
      >
        {authenticated === null && <Text style={[Color.text, Size.regular]}>Loading...</Text>}
        {authenticated === false && (
          <DButton onClick={login} style={{ width: '100%' }}>
            Login
          </DButton>
        )}
      </View>
    </Screen>
  )
}

export default Login
