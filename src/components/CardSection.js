import { useEffect } from 'react'
import Card from './Card'
import CardSectionCSS from '../styles/CardSection.module.css'

export default function CardSection({
  cards,
  setCards,
  incrementScoreIfValid,
  currentScore,
  fetchImages,
  numCards,
}) {
  useEffect(() => {
    fetchImages()
  }, [])

  useEffect(() => {
    // shuffle cards array

    if (!cards.length) return // only shuffle if cards exist

    const idx = []
    for (let i = 0; i < numCards; i++) {
      idx.push(i)
    }

    const shuffledIdx = []
    while (idx.length > 0) {
      const randIdx = Math.floor(Math.random() * idx.length)
      shuffledIdx.push(idx.splice(randIdx, 1)[0])
    }

    setCards(shuffledIdx.map((idx) => cards[idx]))
  }, [currentScore])

  return (
    <div className={CardSectionCSS.cardContainer}>
      {cards.map((card) => (
        <Card
          key={card.id}
          incrementScoreIfValid={incrementScoreIfValid}
          cardInfo={card}
        />
      ))}
    </div>
  )
}
