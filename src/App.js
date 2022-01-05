import { useState } from 'react'
import './App.css'
import PlayerItem from './components/Players/PlayerItem'
import Settings from './components/Settings/Settings'

function App() {
  const [displaySettings, setDisplaySettings] = useState(false)
  const [players, setPlayers] = useState([])
  const [highestScore, setHighestScore] = useState(null)

  const displaySettingsHandler = () => {
    setDisplaySettings(true)
  }

  const closeSettingsHandler = () => {
    setDisplaySettings(false)
  }

  const setHighestScoreHandler = score => {
    setHighestScore(score)
  }

  const resetScores = () => {
    const tempArr = []
    players.forEach(player => {
      player.score = 0
      tempArr.push(player)
    })
    setPlayers(tempArr)
  }
  
  const raiseScoreHandler = player => {
    const tempArr = [...players]
    const index = tempArr.findIndex(_player => _player.id === player.id)
    tempArr[index].score += 1
    setPlayers(tempArr)
    if (tempArr[index].score === highestScore) {
      alert(player.name + ' won!!!')
      resetScores()
    }
  }

  const lowerScoreHandler = player => {
    const tempArr = [...players]
    const index = tempArr.findIndex(_player => _player.id === player.id)
    if (tempArr[index].score === 0) return
    tempArr[index].score -= 1
    setPlayers(tempArr)
  }

  const addPlayerHandler = player => {
    setPlayers(prev => {
      return [player, ...prev]
    })
  }

  const removePlayerHandler = player => {
    const tempArr = [...players]
    tempArr.splice(
      tempArr.findIndex(_player => _player.id === player.id),
      1
    )
    setPlayers(tempArr)
  }

  return (
    <div className='App'>
      {!displaySettings && (
        <button onClick={displaySettingsHandler}>Settings</button>
      )}
      {displaySettings && (
        <Settings
          players={players}
          onAddPlayer={addPlayerHandler}
          onRemovePlayer={removePlayerHandler}
          onCloseSettings={closeSettingsHandler}
          onSetHighestScore={setHighestScoreHandler}
        />
      )}
      {!displaySettings && players.length === 0 && <h1>Add players!</h1>}
      {!displaySettings &&
        players.map(player => (
          <PlayerItem
            key={player.id}
            player={player}
            onRaiseScore={raiseScoreHandler}
            onLowerScore={lowerScoreHandler}
          ></PlayerItem>
        ))}
    </div>
  )
}

export default App
