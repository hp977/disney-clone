import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' />
      </Background>
      <ImageTitle>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' />
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src='/images/play-icon-black.png' />
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src='/images/play-icon-white.png' />
            <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
        </GroupWatchButton>

      </Controls>
      <SubTitle>
        This is a SubTitle
      </SubTitle>
      <Description>
        This is supposed to be be Description text.
      </Description>
    </Container>
  )
}

export default Detail


// React Router DOM to switch between homepage and detail page
// npm install react-router-dom

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
    display: flex;
    align-items: center;
    margin-right: 20px;
    height: 45px;
    background: rgba(249, 249, 249);
    font-size: 15px;
    padding: 0 15px;
    cursor: pointer;
    font-weight: 550;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    letter-spacing: 1.3px;

    &:hover {
      background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
background: rgba(249, 249, 249, .1);
color: white;
font-size: 15px;
padding: 0 10px;
border: 2px solid rgb(198, 198, 198);



&:hover {
  background: rgb(198, 198, 198);
}
`

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .6);
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;

  span {
    font-size: 33px;
    color: white;
  }

  &:hover {
    background-color: rgba(0, 0, 0, .3);
  }
`

const GroupWatchButton = styled(AddButton)`

  background-color: black;
`

const SubTitle = styled.div`
  margin-top: 26px;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
`

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  margin-top: 10px;
  font-size: 20px;
`