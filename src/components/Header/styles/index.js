import styled from 'styled-components'

export const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`

export const Banner = styled.img`
  top: 56px;
  position: relative;
  background-image: url('banner.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
`