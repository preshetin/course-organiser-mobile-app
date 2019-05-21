import React from 'react'
import { Button } from 'react-native'
import { Auth } from 'aws-amplify'

const LogoutButton = () => {
  const handleLogout = async event => {
    await Auth.signOut()
    console.log('Sign out')
  }

  return (
    <Button
      onPress={handleLogout}
      title='Sign out'
      accessibilityLabel='Learn more about this purple button'
    />
  )
}

export default LogoutButton
