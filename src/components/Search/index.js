import React from 'react'

import { Container } from './styles'

export default function Search({ filterValue, setFilterValue }) {
  const searchValue = filterValue
  const setSearchValue = setFilterValue

  return (
    <Container>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button>🔎</button>
    </Container>
  )
}
