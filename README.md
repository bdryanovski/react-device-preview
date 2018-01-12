# react-device-preview

React component to create CSS only preview of the device.
The css is part of [device.css](http://marvelapp.github.io/devices.css/)

### Install

```bash
$ npm i react-device-preview
```

### Usage

```js
import React, { Component } from 'react'
import ReactDevicePreview from 'react-device-preview'

class Something extends Component {
  render () {
    return (
      <div>
        <h1> iPhoneX </h1>

        <ReactDevicePreview
          device="iphonex"
          scale="0.6"
          >
          <h1> Hello World </h1>
        </ReactDevicePreview>

      </div>
    )
  }
}
```

#### Credits

Thanks again to the people of [Marvel](https://marvelapp.com/) for the hard work. And this small 
project will never be here without them. 
