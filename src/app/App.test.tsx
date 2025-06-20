import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import App from './App'

describe('App Component', () => {
  test("renders the text 'Vite + React'", () => {
    render(<App />)
    const heading = screen.getByText(/Vite \+ React/i)
    expect(heading).toBeInTheDocument()
  })
})
