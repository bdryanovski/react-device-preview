import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-device-preview Demo</h1>
      <Example
        device="iphone5c"
        controls="true"
        color="black"
      >
        <center>
          <br />
          <h1> Hello World </h1>
        </center>
      </Example>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
