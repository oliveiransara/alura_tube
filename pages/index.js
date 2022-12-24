import React, { useState } from 'react'
import { CSSReset } from '../public/CSSReset'

import config from '../config.json'
import { videoService } from '../src/services/videoService'

import Menu from '../src/components/Menu'
import Header from '../src/components/Header'
import TimeLine from '../src/components/TimeLine'

function Home() {
  const [filterValue, setFilterValue] = useState('')
  const service = videoService()
  const [playlists, setPlaylists] = useState({})

  React.useEffect(() => {
    console.log('useEffect')
    service.getAllVideos().then((dados) => {
      console.log(dados.data)

      const newPlaylist = {}
      dados.data.forEach((video) => {
        if (!newPlaylist[video.playlist]) newPlaylist[video.playlist] = []
        newPlaylist[video.playlist] = [video, ...newPlaylist[video.playlist]]
      })
      setPlaylists(newPlaylist)
    })
  }, [])

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
        <Header />
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <TimeLine searchValue={filterValue} playlists={playlists} />
      </div>
    </>
  )
}

export default Home
