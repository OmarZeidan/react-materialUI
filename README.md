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
Make sure oyu clone this repo, navigate to the folder and run the following.

```shell
[sudo] npm i
```
> i: install


## Material UI.
### How to inject it with your React Application.

Well, Material-UI require you to install ```react-tap-event-plugin```, and this is to listen for touch/tap/ and click events.
However, please note that this dependency is **temporary** . For more information on this, please [click here](http://www.material-ui.com/#/get-started/installation)

Also, by defauly, Material-UI using Roboto Font from Google, but in this tutorial I will show you how to change this as well.

#### Installing the ```react-tap-event-plugin```

```shell
[sudo] npm i -D react-tap-event-plugin
```

### How to inject it?

Copy and paste the following ar the starter *entry* file of your application.

```js
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
```

## How to use Material-UI




> ./js/components/App.js

```js
import React from 'react';
// Material UI theme.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Components
import HomePage from './components/home/HomePageComponent'

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
)

export default App
```

> ./js/components/home/HomePageComponent

```js
import React from 'react';
// Material UI Components
import RaisedButton from 'material-ui/RaisedButton'


const HomePageComponent = () => (
  <div className='container'>
    <RaisedButton />
  </div>
)

export default HomePageComponent
```

> ./index.js

```js
import React from 'react';
import {render} from 'react-dom';
// Components
import App from './js/components/home/HomePageComponent'

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
)
```

# Customisation