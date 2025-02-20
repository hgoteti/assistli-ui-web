import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from "./pages/auth/login"
import ForgotPasswordPage from "./pages/auth/forgot-password"
import LoginOTPPage from "./pages/auth/login-otp"
import { createBrowserRouter } from 'react-router-dom'
import AuthPage from "./pages/auth/AuthPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export const router = createBrowserRouter([
  /*{
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/auth/login-otp",
    element: <LoginOTPPage />,
  },*/
  {
    path: "/auth/*",
    element: <AuthPage />,
  },
])

export default App
