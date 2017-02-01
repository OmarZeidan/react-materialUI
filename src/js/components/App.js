import React, {Component} from 'react'
/* Material UI Theme Provider.
–––––––––––––––––––––––––––––––––––––––––––––––––– */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/* Components
–––––––––––––––––––––––––––––––––––––––––––––––––– */
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
