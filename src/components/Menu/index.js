import React from 'react'

import { Logo } from '../../../public/Logo'
import Search from '../Search'
import DarkModeSwitch from '../PageTheme/DarkModeSwitch'

import { Container } from './styles'

export default function Menu({ filterValue, setFilterValue }) {
  return (
    <Container>
      <div>
        <Logo />
      </div>
      <Search
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <DarkModeSwitch />
    </Container>
  )
}
