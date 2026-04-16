import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
  if (loggedIn && isAdmin) {
    return "Welcome Admin!"
  }
  if (loggedIn) {
    return "Welcome User!"
  }
}

export default UserStatus