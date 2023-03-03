import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div style={{textAlign: 'center'}}>
                  <Link to={'/'}>
                  <img src="/img/Logo.png" alt="logo" />
            </Link>
        <h1>Welcome to the Market</h1>
        <p>If its not here, you won't find it anywhere else</p>
    </div>
  )
}

export default Landing