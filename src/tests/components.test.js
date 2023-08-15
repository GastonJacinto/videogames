import { render, screen } from '@testing-library/react'
import Loader from '../components/Loader/Loader'

describe('Loader', () => {
 it('Renders properly', () => {
   render(<Loader />)
   expect(screen.getByText(/L ading/i)).toBeInTheDocument()
 })
})