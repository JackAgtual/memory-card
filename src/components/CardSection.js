import { useState, useEffect } from 'react'
import Card from './Card'
import CardSectionCSS from '../styles/CardSection.module.css'
import { ACCESS_KEY } from '../ApiKeys'

export default function CardSection({ incrementScoreIfValid, currentScore }) {
  const numCards = 12
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      // const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&orientation=squarish&count=${numCards}`
      const url = 'http://localhost:3500/data'
      const response = await fetch(url)
      const data = await response.json()
      setCards(data)
    }

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
