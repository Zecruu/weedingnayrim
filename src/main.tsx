import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import AccessPage from './pages/AccessPage.tsx'
import RsvpPage from './pages/RsvpPage.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/access" element={<AccessPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rsvp"
          element={
            <ProtectedRoute>
              <RsvpPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
)
