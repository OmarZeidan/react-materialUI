import React from 'react'
/* Material UI Components
–––––––––––––––––––––––––––––––––––––––––––––––––– */
import RaisedButton from 'material-ui/RaisedButton'

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
