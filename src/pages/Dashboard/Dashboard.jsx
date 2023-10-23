import React, { useEffect, useState } from 'react'
import { StyleDash } from './dashboard.styles'
import { useNavigate } from 'react-router-dom'
import adote from '/adote.svg'
import Header from '../../components/views/LandingPage/Header/Header'

import MainDashboard from '../../components/views/Dashboard/Main/MainDashboard'


const Dashboard = () => {
    
        
  return (
    <StyleDash>
      <Header/>
      <MainDashboard/>
    </StyleDash>
  )
}

export default Dashboard