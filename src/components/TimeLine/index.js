import React from 'react'

import config from '../../../config.json'
import { Favorites } from './Favorites'

import { Container } from './styles'

export default function TimeLine({ searchValue, ...props }) {
  const playlistNames = Object.keys(config.playlists)

  return (
    <Container>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const searchValueNormalized = searchValue.toLowerCase()
                  console.log(titleNormalized)
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
    </Container>
  )
}
