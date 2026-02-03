import { render, screen, fireEvent } from '@testing-library/react'
import LoginPage from '../pages/LoginPage'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'

test('shows error for invalid phone number', () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    </BrowserRouter>
  )

  fireEvent.change(screen.getByPlaceholderText('+254712345678'), {
    target: { value: '0712345678' },
  })

  fireEvent.click(screen.getByText('Login'))

  expect(
    screen.getByText('Phone number must start with +254')
  ).toBeInTheDocument()
})
