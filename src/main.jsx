import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Home from './Components/Home.jsx'
import Register from './Components/Register.jsx'
import UserProvider from './provider/UserProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home/> },
      { path: '/login', element: <Login/> },
      { path: '/register', element: <Register/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
