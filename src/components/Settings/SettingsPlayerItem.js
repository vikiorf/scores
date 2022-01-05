import React from 'react'

const SettingsPlayerItem = props => {
  const removePlayerHandler = () => {
    props.onRemovePlayer(props.player)
  }

  return (
    <li key={props.player.id}>
      {props.player.name} <button onClick={removePlayerHandler}>Remove</button>{' '}
    </li>
  )
}

export default SettingsPlayerItem
