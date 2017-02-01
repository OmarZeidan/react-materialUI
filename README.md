## React App with Material UI
> A starter react App with a (customised) Matreial UI components.

##  Why?
Because I wasn't able to find a fine example on how to customise Material-UI components and theme!

## Want to help?
Please, Would love to hear your feedback.

## What inside?
- [React](https://facebook.github.io/react/)
- [Webpack2](https://webpack.js.org/)
- [PostCSS](https://github.com/postcss/postcss) with [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Material-UI](http://www.material-ui.com)

## Installation
After cloning this repo into your local machine, run the following command

```shell
[sudo] npm i
```
> i: install

This command will install all the dependencies this project needs.


## Material UI.
### How to inject it with your React Application.

Material-UI require you to install ```react-tap-event-plugin``` TO listen for touch/tap/ and click events.
However, please note that this dependency is **temporary** . For more information about this, please [read here](http://www.material-ui.com/#/get-started/installation)

Also, by defauly, Material-UI using Roboto Font from Google, but in this tutorial I will show you how to change this as well.

#### 1. Installing the ```react-tap-event-plugin```

```shell
[sudo] npm i -D react-tap-event-plugin
```
> -D (--save-dev)

#### 2. Where to inject it?

Copy and paste the following code into your starter *entry* file. (**index.js)**

```js
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
```

## Installing Material UI

### 1. Installation

All pakcages are already installed, but here are what you have to install.
```shell
[sudo] npm i -D material-ui
 ```

## Usage

Lets consider the following files structure.
```
src/
    components/
      home/
        HomePageComponent.js
      App.js
  index.js
```

> **```index.js```**

```js
import React from 'react'
import {render} from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import App from './js/components/App'

render(<App />, document.getElementById('root'))
```


> **```App.js```**

```js
import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HomePage from './home/HomePageComponent'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <HomePage />
        </div>
      </MuiThemeProvider>
    )
  }
}
export default App
```

> **```HomePageComponent.js```**

```js
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton' //One of the Material UI Component

const HomePageComponent = () => {
  return (
    <div>
      <RaisedButton label='Default' />
      <RaisedButton primary='true' label='Primary' />
      <RaisedButton secondary='true' label='Secondary' />
    </div>
  )
}

export default HomePageComponent
```

Cool, Lets 💃, we have React and Material UI working together now. We have the 3 different Raised Button styles with their default colors and styles.

## What is next?

Next, we will add some customisation to our project.