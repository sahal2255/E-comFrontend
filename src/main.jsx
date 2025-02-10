import { createRoot } from 'react-dom/client'
// import  AuthProvider  from './context/AuthProvider.jsx'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <>
  <Toaster />
    <App />
    </>
)
