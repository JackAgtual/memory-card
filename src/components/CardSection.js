import { useState, useEffect } from 'react'
import Card from './Card'
import CardSectionCSS from '../styles/CardSection.module.css'
import { cardsData } from '../data/cards'

export default function CardSection({ incrementScoreIfValid, currentScore }) {
  const [cards, setCards] = useState(cardsData)

  useEffect(() => {
    // shuffle cards array
    const idx = []
    for (let i = 0; i < cardsData.length; i++) {
      idx.push(i)
    }

    const shuffledIdx = []
    while (idx.length > 0) {
      const randIdx = Math.floor(Math.random() * idx.length)
      shuffledIdx.push(idx.splice(randIdx, 1)[0])
    }

    setCards(shuffledIdx.map((idx) => cardsData[idx]))
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
