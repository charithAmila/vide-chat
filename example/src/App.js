import React, { Component } from 'react'

import VideoChat from 'demo'

const ButtonInner = () => <span>Call</span>

const button = {
  children: <ButtonInner />,
  onClick: (e) => {
  }
}


export default class App extends Component {
  render () {
    return (
      <div 
      style={{background:'green',width:100,height:100, padding: 10}}
      >
        <VideoChat button={button} />
      </div>
    )
  }
}
