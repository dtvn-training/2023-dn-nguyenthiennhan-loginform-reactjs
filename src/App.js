import React, { useState } from 'react'
import { Login } from './Components/Login/login'
import Home from './pages/Home'

export default function App() {

  
  const [page, setPage] = useState("login")

  return (
    <div>
      {/* {page === "login" && <Login setPage={setPage} />}
      {page === "home" && <Home  />} */}
      <Login/>
  
      </div>
  )
}

