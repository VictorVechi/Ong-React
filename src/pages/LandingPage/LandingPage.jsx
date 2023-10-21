import React from 'react'
import Header from '../../components/views/LandingPage/Header/Header'
import Main from '../../components/views/LandingPage/Main/Main'
import { StyleLP } from './landingPage.styles'

const LandingPage = () => {
  return (
    <StyleLP>
        <Header/>
        <Main/>
    </StyleLP>
  )
}

export default LandingPage