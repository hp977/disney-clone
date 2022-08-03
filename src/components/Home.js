import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

export default Home

/* Main is HTML five friendly it tells google or any other browser it is the main content */
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    

    &:before {
        background: url("/images/home-background.png") center center / cover ;
        position: absolute;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        content: ""; 
        no-repeat: fixed;
        z-index: -1;
    }
`


