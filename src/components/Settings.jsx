import React from 'react'
import PropTypes from 'prop-types'
import './Settings.css'

const Settings = ({ clearBoard, done, updateUserChar, userChar }) => {
  // chose whether player is 'x' or 'o' -- game resets on choice.
  const onChangeValue = (event) => {
    updateUserChar(event.target.value)
    clearBoard()
  }

  return (
    <div className='settings'>
      <div className='userSetting' onChange={onChangeValue}>
        <div className='radioButton'>
          <input type='radio' value='x' name='userChar' />
          <span style={{ marginTop: '3px' }}>{'\u2716'}</span>
        </div>
        <div className='radioButton'>
          <input type='radio' value='o' name='userChar' defaultChecked={userChar === 'o'} />
          <span style={{ marginTop: '8px' }}>{'\u2B58'}</span>
        </div>
      </div>
      <div className='clearBoard'>
        <button onClick={clearBoard}>
          {done ? 'PLAY AGAIN?' : 'RESTART'}
        </button>
      </div>
    </div>
  )
}

Settings.propTypes = {
  clearBoard: PropTypes.func,
  done: PropTypes.string,
  updateUserChar: PropTypes.func,
  userChar: PropTypes.string
}

export default Settings
