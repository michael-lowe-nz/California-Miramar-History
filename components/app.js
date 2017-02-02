import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="app">
        <h1>Welcome to the History of California Home and Garden Miramar</h1>
        <div>
          <img src="../img/cali_garage.jpg" className="heroImage"></img>
        </div>
      </div>
    )
  }

}

export default App
