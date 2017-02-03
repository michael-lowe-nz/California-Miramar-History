import React, { Component } from 'react'
import { bounce } from 'react-animations'
import Radium from 'radium'

import Header from './Header'

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
        <h1 style={styles}>From humble beginnings...</h1>
        <LogoOld />
        <LogoOldCircle />
        <div className="header">
          <img src="../img/cali_garage.jpg" className="heroImage" id="first"></img>
          <h1 className="title">1974</h1>
        </div>
        <div className="section">
          <img src="../img/cali_aerial.jpg" className="heroImage" id="second"></img>
          <h1 className="title">1985</h1>
        </div>
      </div>
    )
  }
}

export default App

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
