import { useEffect, useState } from 'react'
import { useAuth0 } from 'react-native-auth0'

const useLogin = () => {
  const { authorize, clearSession, clearCredentials, hasValidCredentials, user } = useAuth0()

  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const authenticate = async () => {
      setAuthenticated(await hasValidCredentials())
    }
    authenticate()
  }, [])

  const login = async () => {
    try {
      await authorize()
      setAuthenticated(await hasValidCredentials())
    } catch (e) {
      console.log(e)
    }
  }

  const logout = async () => {
    try {
      await clearSession()
      await clearCredentials()
      setAuthenticated(await hasValidCredentials())
    } catch (e) {
      console.log(e)
    }
  }

  return { authenticated, login, logout }
}

export default useLogin
