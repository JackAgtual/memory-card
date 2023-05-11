import { useState } from 'react'
import Header from './components/Header'
import CardSection from './components/CardSection'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function incrementScoreIfValid() {
    setCurrentScore((prevScore) => prevScore + 1)
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore} />
      <CardSection incrementScoreIfValid={incrementScoreIfValid} />
    </div>
  )
}

export default App
