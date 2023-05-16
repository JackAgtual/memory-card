import CardCSS from '../styles/Card.module.css'

export default function Card({ cardInfo, incrementScoreIfValid }) {
  return (
    <img
      onClick={() => incrementScoreIfValid(cardInfo.id)}
      className={CardCSS.card}
      src={cardInfo.urls.small}
    ></img>
  )
}
