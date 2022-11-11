import { CSSReset } from '../components/CSSReset'
import config from '../config.json'

import Header from '../components/Header'
import Menu from '../components/Menu'
import TimeLine from '../components/TimeLine'

function HomePage() {
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
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists}>Conteúdo</TimeLine>
      </div>
    </>
  )
}

export default HomePage
