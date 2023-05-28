import CardCSS from '../styles/Card.module.css'

type CardProps = {
  // TODO: check types
  cardInfo: {
    id: string
    urls: { small: string }
  }
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
