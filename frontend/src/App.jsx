import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'

import Login from './pages/Auth/Login.jsx'
import SignUp from './pages/Auth/SignUp.jsx'
import Dashboard from './pages/Dashboard/Home.jsx'
import Income from './pages/Dashboard/Income.jsx'
import Expense from './pages/Dashboard/Expense.jsx'
import Home from './pages/Dashboard/Home.jsx'
import UserProvider from './contaxt/UserContact.jsx'

 function App() {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path ="/" element ={<Root/>} />
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/signup" exact element={<SignUp/>}/>
          <Route path="/dashboard" exact element={<Home/>}/>
          <Route path="/income" exact element={<Income/>}/>
          <Route path="/expense" exact element={<Expense/>}/>
        </Routes>
      </Router>
    </div>
    </UserProvider>
  )
}

export default App

const Root = () => {
  //  check if tokens exist in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  //  Redirect to the dashboard if authenticated else to login page

  return isAuthenticated ? (
    <Navigate to ="dashboard"/>

  ) : (
    <Navigate to ="login"/>
  )
}