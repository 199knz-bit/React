import React, {useContext, createContext, useState } from 'react'
const AuthContext = createContext()

export function useAuthContext() {
    return useContext(AuthContext)
}

export function AuthProvider({children}){ 
    const [loggedIn, setLoggedIn] = useState(() => {
      const savedLogin = localStorage.getItem("loggedIn")
      return savedLogin === "true"
    })
    const [user, setUser] = useState(() =>{
      const savedUser = localStorage.getItem("user")
      return savedUser ? JSON.parse(savedUser) : null
    })

    function login(userData){
      console.log('Login function called')
      setLoggedIn(true)
      setUser(userData)
      localStorage.setItem("loggedIn", "true")
      localStorage.setItem("user", JSON.stringify(userData))
    }

    function logout(){
      setLoggedIn(false)
      setUser(null)
      localStorage.removeItem("loggedIn")
      localStorage.removeItem("user")
      }
    

  return  (
    <AuthContext.Provider value={{loggedIn, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
