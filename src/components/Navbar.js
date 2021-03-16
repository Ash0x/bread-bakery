import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// import { Switch, Route, NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded'
import InfoRoundedIcon from '@material-ui/icons/InfoRounded'
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded'
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded'

const useStyles = makeStyles({
  headerStyle: {
    margin: 'auto',
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.5)',
  },
})

export default function Navbar() {
  const classes = useStyles()
  const [activeTab, setactiveTab] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  //  const routes = ['/logout', '/login', '/menu', /contact', '/order', '/about']

  const handleChange = (event, newValue) => {
    setactiveTab(newValue)

    console.log(newValue)
  }

  const handleLogin = () => setIsLoggedIn(!isLoggedIn)

  return (
    <AppBar square className={classes.headerStyle}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant='fullWidth'
        indicatorColor='secondary'
        textColor='inherit'
        aria-label='icon label tabs example'>
        {isLoggedIn ? (
          <Tab
          onClick={handleLogin}
            icon={<PermIdentityRoundedIcon />}
            label='LOG OUT'
            component={NavLink}
            to='/logout'
          />
        ) : (
          <Tab
          onClick={handleLogin}
            icon={<PermIdentityRoundedIcon />}
            label='LOG IN'
            component={NavLink}
            to='/login'
          />
        )}
        <Tab
          icon={<StorefrontRoundedIcon />}
          label='MENU'
          component={NavLink}
          to='/menu'
        />
        <Tab
          icon={<PhoneRoundedIcon />}
          label='CONTACT'
          component={NavLink}
          to='/contact'
        />
        <Tab
          icon={<CreditCardRoundedIcon />}
          label='ORDER NOW'
          component={NavLink}
          to='/order'
        />
        <Tab
          icon={<InfoRoundedIcon />}
          label='ABOUT US'
          component={NavLink}
          to='/about'
        />
      </Tabs>
    </AppBar>
  )
}