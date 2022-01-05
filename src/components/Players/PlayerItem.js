import React from 'react'

const PlayerItem = props => {
  const raiseScoreHandler = () => {
    props.onRaiseScore(props.player)
  }

  const lowerScoreHandler = () => {
    props.onLowerScore(props.player)
  }

  return (
    <div>
      <button onClick={lowerScoreHandler}>-</button>
      <p>{props.player.name}</p>
      <p>{props.player.score}</p>
      <button onClick={raiseScoreHandler}>+</button>
    </div>
  )
}

export default PlayerItem
