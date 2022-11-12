import React from 'react'

import { Logo } from '../../../public/Logo'
import Search from './Search'

import { StyledMenu } from './styles'

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {

  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search
        valorDoFiltro={valorDoFiltro}
        setValorDoFiltro={setValorDoFiltro}
      />
    </StyledMenu>
  )
}
