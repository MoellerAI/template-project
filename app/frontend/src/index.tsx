import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "@/app/home/page"
import LoginPage from './app/login/page'
import SignUpPage from "@/app/signup/page"
import RootLayout from '@/app/layout'
import '@/app/globals.css'

export default function App() {
  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} index/>
          <Route path="/login" element={<LoginPage />} index/>
          <Route path="/signup" element={<SignUpPage />} index/>
        </Routes>
      </BrowserRouter>
    </RootLayout>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);