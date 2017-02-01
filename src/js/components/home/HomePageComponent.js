import React from 'react'
/* Material UI Components
–––––––––––––––––––––––––––––––––––––––––––––––––– */
import RaisedButton from 'material-ui/RaisedButton'

/* Style
–––––––––––––––––––––––––––––––––––––––––––––––––– */
require('./home.scss')
const customBtnStyle = {
  backgroundColor: 'orangered'
}
const HomePageComponent = () => {
  return (
    <div className='container h--text-center'>
      <h1 className='pageTitle h--text-center'> React App with Material UI </h1>
      <p className='h--text-center'> More than starter project using React and Material UI </p>
      <RaisedButton label='Default' />
      <RaisedButton primary={true} label='Primary' buttonStyle={customBtnStyle} />
      <RaisedButton secondary={true} label='Secondary' />
    </div>
  )
}

export default HomePageComponent
