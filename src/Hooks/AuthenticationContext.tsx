import { jwtDecode } from 'jwt-decode'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth0 } from 'react-native-auth0'
import Config from 'react-native-config'

const useAuth0Authentication = () => {
  const {
    authorize,
    clearSession,
    clearCredentials,
    hasValidCredentials,
    getCredentials,
    user,
    error,
  } = useAuth0()
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    console.log(error) // This error will be thrown on slow network
  }, [error])

  const isSessionExpired = async () => {
    let sessionExpired = false
    const accessToken = (await getCredentials())?.accessToken
    if (accessToken) {
      try {
        let exp = jwtDecode(accessToken).exp
        if (exp) {
          exp = exp * 1000
          const seconds = (exp - Date.now()) / 1000
          console.log('seconds', seconds)
          sessionExpired = seconds <= 0
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

const AuthenticationContext = createContext<ReturnType<typeof useAuth0Authentication>>({
  authenticated: null,
  authenticate: () => Promise.resolve(),
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
})

export const AuthenticationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthenticationContext.Provider value={useAuth0Authentication()}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthenticationContext)
