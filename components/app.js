import React, { Component } from 'react'
import { bounce } from 'react-animations'
import Radium from 'radium'

import Nav from './Nav'

// const OldLogo = require('../svg/logo_old')
import LogoOld from '../svg/logo_old'
import LogoOldCircle from '../svg/logo_old_circle'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="app">
        <Nav />
        <div className="section slide1">
          <h1>It started as a small fruit shop on Lambton Quay...</h1>
          <img src="../img/cali_garage.jpg" className="slideImage" id="first"></img>
          <p className="title">1974</p>
        </div>
        <div className="section slide2">
          <img src="../img/cali_aerial.jpg" className="slideImage" id="second"></img>
          <h1 className="title">1985</h1>
        </div>
      </div>
    )
  }
}

export default App

const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
