import React from 'react'
import { Image, Text, View } from 'react-native'
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
          <>
            <Text style={[Size.large, Color.text]}>Mock Finance</Text>
            <Image
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                marginTop: 40,
              }}
              source={require('./logo.png')}
            />
            <DButton onClick={login} style={{ width: '80%', marginTop: 96 }}>
              Login
            </DButton>
          </>
        )}
      </View>
    </Screen>
  )
}

export default Login
