import { createContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase'

//コンテキストを使用することで、
const AuthContext = createContext({ currentUser: undefined })

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    undefined
  )

  // ログインの情報が変われば現在のユーザー情報を現在のものに変更する
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
