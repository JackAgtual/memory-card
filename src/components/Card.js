import CardCSS from '../styles/Card.module.css'

export default function Card({ cardInfo, incrementScoreIfValid }) {
  return (
    <div onClick={() => incrementScoreIfValid(cardInfo.id)} className={CardCSS.card}>
      <p>{cardInfo.quote}</p>
      <p>{cardInfo.author}</p>
    </div>
  )
}
