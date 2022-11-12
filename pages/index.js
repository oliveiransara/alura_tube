import React from 'react'
import { CSSReset } from '../public/CSSReset'

import TimeLine from '../src/TimeLine'

function Home() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <TimeLine />
      </div>
    </>
  )
}

export default Home
