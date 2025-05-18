import { ReactNode } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuthentication } from '../Hooks/AuthenticationContext'
import { useFocusEffect } from '@react-navigation/native'

export default ({
  authenticationRequired = true,
  children,
}: {
  authenticationRequired?: boolean
  children: ReactNode
}) => {
  const { bottom } = useSafeAreaInsets()

  const { authenticate } = useAuthentication()

  useFocusEffect(() => {
    console.log('authenticationRequired', authenticationRequired)
    if (authenticationRequired) {
      authenticate()
    }
  })

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={[{ flex: 1, marginBottom: bottom }]}>{children}</View>
    </View>
  )
}
