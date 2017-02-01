import React from 'react'
/* Material UI Components
–––––––––––––––––––––––––––––––––––––––––––––––––– */
import RaisedButton from 'material-ui/RaisedButton'

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
