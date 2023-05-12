import { useEffect, useState } from 'react'
import Header from './components/Header'
import CardSection from './components/CardSection'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedCardIds, setClickedCardIds] = useState(new Set())

  function recordClickedCard(cardId) {
    setClickedCardIds((prevClickedCardIds) => {
      const newClickedCardIds = new Set(prevClickedCardIds)
      newClickedCardIds.add(cardId)
      return newClickedCardIds
    })
  }

  function incrementScoreIfValid(cardId) {
    if (clickedCardIds.has(cardId)) {
      // card aleady clicked; restart game
      setCurrentScore(0)
      setClickedCardIds(new Set())
    } else {
      // new card clicked; increment score
      setCurrentScore((prevScore) => prevScore + 1)
      recordClickedCard(cardId)
    }
  }

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore)
    }
  }, [currentScore])

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore} />
      <CardSection incrementScoreIfValid={incrementScoreIfValid} />
    </div>
  )
}

export default App
