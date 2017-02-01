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

## Using custom colors.
Lets suppose we want to change the primary color of the RaisedButton. I will show you two different appraches, one direct to the component, and one to be general.

1- Change the primary background color direct for the component.

> **```HomePageComponent.js```**

```js
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton' //One of the Material UI Component

const customBtnStyle = {
  backgroundColor: 'orangered'
}

const HomePageComponent = () => {
  return (
    <div>
      <RaisedButton label='Default' />
      <RaisedButton primary='true' label='Primary' buttonStyle={customBtnStyle} />
      <RaisedButton secondary='true' label='Secondary' />
    </div>
  )
}

export default HomePageComponent
```
Notice we have changed the background color of the RaisedButton primary directly by injecting the new styles via "buttonStyle".
This works if you want to change it only for this particular Button, but this doesn't mean that you have your own new primaryColor for the button.

So, to be able to change the background color for all primary buttons, we have to do the following.

2- Changing the primary background color by changing the theme itself.

  Its a bit of advnace topic, so lets take our time explaining it.

First: You can always return to the official documentation [here](http://www.material-ui.com/#/customization/themes).
Second: Currently, you can switch between the two themes, light (default) and dark.

Switching to the dark theme is quite simple:


> **```App.js```**

```js
import React, {Component} from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme' // NEW: import the dark theme.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import HomePage from './home/HomePageComponent'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <HomePage />
        </div>
      </MuiThemeProvider>
    )
  }
}
export default App
```

Notice the ```muiTheme``` object in ```<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>```
This is a JS object based on the ```lighBaseTheme```. Using this object and its keys you can be able to customise your theme.

It has the following keys:

- ```spacing```.
- ``` fontFamily```.
- ```paletter```.
- ```zIndex```.
- ```isRtl```.
And each component has its own keys to customise them individually.
- ```appBar```
- ```avatar```
- ...etc
For more details please follow this link [Themes.](http://www.material-ui.com/#/customization/themes).
