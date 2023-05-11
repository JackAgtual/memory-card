import CardSectionCSS from '../styles/CardSection.module.css'
import { cards } from '../data/cards'

export default function CardSection({ incrementScoreIfValid }) {
  return (
    <div className={CardSectionCSS.cardContainer}>
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => incrementScoreIfValid(card.id)}
          className={CardSectionCSS.card}
        >
          {card.name}
        </div>
      ))}
    </div>
  )
}
