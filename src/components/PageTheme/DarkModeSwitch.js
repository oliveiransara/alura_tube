import React from 'react'
import { Container } from './styles'
import { ColorModeContext } from './ColorMode'

export default function DarkModeSwitch() {
  const contexto = React.useContext(ColorModeContext)

  return (
    <Container>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          contexto.toggleMode()
        }}
      />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </Container>
  )
}
