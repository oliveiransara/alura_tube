import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }

  section {
    width: 100%;
    overflow: hidden;

    div {
      width: calc(100vw - 12px * 3);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || '#222222'};
        }
      }
    }
  }
`

export const FavoritesContainer = styled.div`
  display: flex;
  list-style: none;

  margin-left: 16px;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    width: 0;
  }
`

export const FavoritesList = styled.div`
  display: flex;
  justify-content: flex-start;
  list-style: none;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  li {
    display: flex;
    margin-top: 26px;
    padding: 6px;
  }
  a {
    color: ${({ theme }) => theme.textColorBase};
  }
`
