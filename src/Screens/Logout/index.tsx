import React, { useEffect } from 'react'
import { useAuthentication } from '../../Components/Authentication/AuthenticationContext'

const Logout = () => {
  const { logout } = useAuthentication()

  useEffect(() => {
    const perform = async () => {
      await logout()
    }
    perform()
  }, [])

  return <></>
}

export default Logout
