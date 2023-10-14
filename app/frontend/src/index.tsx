import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter, Routes, Route} from 'react-router-dom'

import HomePage from "@/app/home/page"
import RootLayout from '@/app/layout'
import '@/app/globals.css'

export default function App() {
  return (
    <RootLayout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} index/>
        </Routes>
      </HashRouter>
    </RootLayout>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);