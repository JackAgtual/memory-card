import { Random } from 'unsplash-js/dist/methods/photos/types'
import CardCSS from '../styles/Card.module.css'

type CardProps = {
  cardInfo: Random
  incrementScoreIfValid: (cardId: string) => void
}

export default function Card({ cardInfo, incrementScoreIfValid }: CardProps) {
  return (
    <img
      onClick={() => incrementScoreIfValid(cardInfo.id)}
      className={CardCSS.card}
      src={cardInfo.urls.small}
    ></img>
  )
}
