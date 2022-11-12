import React from 'react'

import config from '../../config.json'

import Menu from '../components/Menu'
import Header from '../components/Header'

import {
  StyledTimeline,
  Favorites,
  FavoritesList,
} from './styles'

export default function TimeLine() {
  const playlistNames = Object.keys(config.playlists)
  const favoritesList = config.favorites
  const [valorDoFiltro, setValorDoFiltro] = React.useState('')
  const searchValue = valorDoFiltro

  return (
    <>
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Header />
      <StyledTimeline>
        {playlistNames.map((playlistName) => {
          const videos = config.playlists[playlistName]
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase()
                    const searchValueNormalized = searchValue.toLowerCase()
                    return titleNormalized.includes(searchValueNormalized)
                  })
                  .map((video) => {
                    return (
                      <a key={video.url} href={video.url}>
                        <img src={video.thumb} />
                        <span>{video.title}</span>
                      </a>
                    )
                  })}
              </div>
            </section>
          )
        })}
      </StyledTimeline>

      <Favorites>
        <h2>Favoritos</h2>
        {favoritesList.map((favorite) => {
          return (
            <FavoritesList>
              <li>
                <a href={favorite.url}>
                  <img src={`https://github.com/${favorite.github}.png`} />
                  <p>{favorite.name}</p>
                </a>
              </li>
            </FavoritesList>
          )
        })}
      </Favorites>
    </>
  )
}
