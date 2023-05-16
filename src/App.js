import { useEffect, useState } from 'react'
import Header from './components/Header'
import CardSection from './components/CardSection'
import { ACCESS_KEY } from './ApiKeys'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedCardIds, setClickedCardIds] = useState(new Set())
  const [cards, setCards] = useState([])
  const numCards = 12

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

  const fetchImages = async () => {
    const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&orientation=squarish&count=${numCards}`
    // const url = 'http://localhost:3500/data'
    const response = await fetch(url)
    const data = await response.json()
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
        fetchImages={fetchImages}
        setCards={setCards}
      />
      <CardSection
        cards={cards}
        numCards={numCards}
        setCards={setCards}
        fetchImages={fetchImages}
        incrementScoreIfValid={incrementScoreIfValid}
        currentScore={currentScore}
      />
    </div>
  )
}

export default App
