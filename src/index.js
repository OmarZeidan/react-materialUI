import React from 'react'
import {render} from 'react-dom'
/* Material UI initial steps goes here. (This is temporary and will be removed.)
–––––––––––––––––––––––––––––––––––––––––––––––––– */
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

/* Components
–––––––––––––––––––––––––––––––––––––––––––––––––– */
import App from './js/components/App'

render(<App />, document.getElementById('root'))
