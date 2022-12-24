import React from 'react'

import config from '../../../config.json'
import { FavoritesContainer, FavoritesList } from './styles'

export const Favorites = () => {
  const favoritesList = config.favorites

  return (
    <FavoritesContainer>
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
    </FavoritesContainer>
  )
}
