import React from 'react'
import { render, screen } from '@testing-library/react'

import Carousel from './Carousel'

const mockCharity = {
  name: 'Berliner Kältebus',
  description:
    'The Berliner Kältebus drives around Berlin streets helping the homeless population that cannot make it to a warm shelter.',
  url:
    'https://www.berliner-stadtmission.de/kaeltehilfe/kaeltebus/kaeltebus/ueber-den-kaeltebus',
  img: {
    src: '/img/kaeltebus.jpg',
    alt: 'People standing in line at the Bahnhofsmission',
  },
  progress: 68,
}

describe('Carousel component', () => {
  test('"Previous" carousel button is rendered', () => {
    render(<Carousel loading={false} charity={mockCharity} />)
    expect(screen.getByTestId('prevBtn').textContent).toBe('Prev')
  })

  test('"Next" carousel button is rendered', () => {
    render(<Carousel loading={false} charity={mockCharity} />)
    expect(screen.getByTestId('nextBtn').textContent).toBe('Next')
  })
})
