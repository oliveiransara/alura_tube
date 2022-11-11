import config from '../config.json'

import { StyledTimeline, Favorites, FavoritesList } from './StyledTimeLine'

export default function TimeLine() {
  const playlistNames = Object.keys(config.playlists)
  const favoritesList = config.favorites

  return (
    <>
      <StyledTimeline>
        {playlistNames.map((playlistName) => {
          const videos = config.playlists[playlistName]
          console.log(playlistName)
          console.log(videos)
          return (
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video) => {
                  return (
                    <a href={video.url}>
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
          console.log(favorite)
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
