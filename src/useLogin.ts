import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useAuth0 } from 'react-native-auth0'
import Config from 'react-native-config'

const useLogin = () => {
  const { authorize, clearSession, clearCredentials, hasValidCredentials, getCredentials, user } =
    useAuth0()
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  const isSessionExpired = async () => {
    let sessionExpired = false
    const accessToken = (await getCredentials())?.accessToken
    if (accessToken) {
      try {
        let exp = jwtDecode(accessToken).exp
        if (exp) {
          exp = exp * 1000
          sessionExpired = exp - Date.now() <= 0
        }
      } catch (e) {
        console.log(e)
      }
    }
    return sessionExpired
  }

  const authenticate = async () => {
    setAuthenticated((await hasValidCredentials()) && !(await isSessionExpired()))
  }

  const login = async () => {
    try {
      await authorize({ audience: Config.AUTH0_AUDIENCE })
      setAuthenticated(await hasValidCredentials())
    } catch (e) {
      console.log(e)
    }
  }

  const logout = async () => {
    try {
      await clearSession()
      await clearCredentials()
      setAuthenticated(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    authenticate()
  }, [])

  return { authenticated, authenticate, login, logout }
}

export default useLogin
