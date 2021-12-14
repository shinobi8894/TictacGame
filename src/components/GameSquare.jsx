import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './GameSquare.css'

const GameSquare = ({ id, char, findBestMove, updateBoard, userChar }) => {
  const [printChar, setPrintChar] = useState('')

  // nicer 'x's and 'o's
  useEffect(() => {
    if (char === 'x') {
      setPrintChar('\u2716')
    } else if (char === 'o') {
      setPrintChar('\u2B58')
    } else {
      setPrintChar(char)
    }
  })

  return (
    <div
      style={{ pointerEvents: char ? 'none' : 'auto' }}
      className='gameSquare'
      onClick={() => {
        updateBoard(id)
        if (userChar === 'o') {
          // next move is 'x'
          findBestMove(true)
        } else if (userChar === 'x') {
          // next move is 'o'
          findBestMove(false)
        }
      }}
    >
      <span style={{ margin: char === 'o' ? '4px 0 -4px' : null }}>
        {printChar}
      </span>
    </div>
  )
}

GameSquare.propTypes = {
  id: PropTypes.number,
  char: PropTypes.string,
  findBestMove: PropTypes.func,
  updateBoard: PropTypes.func,
  userChar: PropTypes.string
}

export default GameSquare
