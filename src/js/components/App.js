import React, {Component} from 'react'
/* Material UI Theme Provider.
–––––––––––––––––––––––––––––––––––––––––––––––––– */
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

/* Components
–––––––––––––––––––––––––––––––––––––––––––––––––– */
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
