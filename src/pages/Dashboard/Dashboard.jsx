import React from 'react'
import { StyleDash } from './dashboard.styles'
import MainDashboard from '../../components/views/Dashboard/Main/MainDashboard'
import HeaderDash from '../../components/views/Dashboard/Header/HeaderDash'
const Dashboard = () => {
   
  return (
    <StyleDash>
      <HeaderDash/>
      <MainDashboard/>
    </StyleDash>
  )
}

export default Dashboard