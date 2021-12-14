import React from 'react'
import PropTypes from 'prop-types'
import GameSquare from './GameSquare.jsx'
import './GameBoard.css'

const GameBoard = ({ done, findBestMove, gameSquares, updateBoard, userChar }) => (
  <div className='gameBoard' style={{ pointerEvents: done ? 'none' : 'auto' }}>
    {gameSquares.map((char, idx) => {
      return (
        <GameSquare
          key={idx}
          id={idx}
          char={char}
          userChar={userChar}
          updateBoard={updateBoard}
          findBestMove={findBestMove}
        />
      )
    })}
  </div>
)

GameBoard.propTypes = {
  done: PropTypes.string,
  findBestMove: PropTypes.func,
  gameSquares: PropTypes.arrayOf(PropTypes.string),
  updateBoard: PropTypes.func,
  userChar: PropTypes.string
}

export default GameBoard
