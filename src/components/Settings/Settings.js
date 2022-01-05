import React, { useRef } from 'react'
import SettingsPlayerItem from './SettingsPlayerItem'

const Settings = props => {
  const nameInputRef = useRef()
  const highestScoreInputRef = useRef()
  
  const closeSettingsHandler = () => {
    props.onCloseSettings()
  }

  const setHighestScoreHandler = (ev) => {
    ev.preventDefault()
    props.onSetHighestScore(parseInt(highestScoreInputRef.current.value))
    highestScoreInputRef.current.value = ''
  }

  const addPlayerHandler = (ev) => {
    ev.preventDefault()
    const player = {
      score: 0,
      name: nameInputRef.current.value,
      id: Math.random().toString()
    }
    props.onAddPlayer(player)
    nameInputRef.current.value = ''
  }

  const removePlayerHandler = (player) => {
    props.onRemovePlayer(player)
  }
  
  return (
    <div>
      <button onClick={closeSettingsHandler}>Close</button>
      <form onSubmit={addPlayerHandler}>
        <label>Add Player</label>
        <input ref={nameInputRef} placeholder='Name' />
        <button type='submit'>Add</button>
      </form>
      <form onSubmit={setHighestScoreHandler}>
        <label>Set Highest Score</label>
        <input ref={highestScoreInputRef} type='number' placeholder='Score'/>
        <button type='submit'>Set</button>
      </form>
      <ul>
        {props.players.map(player => <SettingsPlayerItem key={player.id} player={player} onRemovePlayer={removePlayerHandler}/>)}
      </ul>
    </div>
  )
}

export default Settings
