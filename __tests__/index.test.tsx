import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a layout', () => {
    render(<Home />)

    const heading = screen.getByRole('header', {
      name: /VideoDownloader\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})