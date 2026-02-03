import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      
      <Route
        path="/main"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/detail/:id"
        element={
          <ProtectedRoute>
            <DetailPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
