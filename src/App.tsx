import { useEffect, useState } from 'react'
import Header from './components/Header'
import CardSection from './components/CardSection'
import { Random } from 'unsplash-js/dist/methods/photos/types'

import Unsplash from './services/unsplash/Unsplash'

const unsplash = new Unsplash()

function App() {
  const [currentScore, setCurrentScore] = useState<number>(0)
  const [highScore, setHighScore] = useState<number>(0)
  const [clickedCardIds, setClickedCardIds] = useState<Set<string>>(new Set())
  const [cards, setCards] = useState<Random[]>([])
  const numCards = 12

  function recordClickedCard(cardId: string) {
    setClickedCardIds((prevClickedCardIds) => {
      const newClickedCardIds = new Set(prevClickedCardIds)
      newClickedCardIds.add(cardId)
      return newClickedCardIds
    })
  }

  function incrementScoreIfValid(cardId: string) {
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

  const handleFetchImages = async () => {
    const data = await unsplash.fetchImages(numCards)
    setCards(data)
    setCurrentScore(0)
  }

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore)
    }
  }, [currentScore])

  return (
    <div className="App">
      <Header
        currentScore={currentScore}
        highScore={highScore}
        fetchImages={handleFetchImages}
      />
      <CardSection
        cards={cards}
        numCards={numCards}
        setCards={setCards}
        fetchImages={handleFetchImages}
        incrementScoreIfValid={incrementScoreIfValid}
        currentScore={currentScore}
      />
    </div>
  )
}

export default App
