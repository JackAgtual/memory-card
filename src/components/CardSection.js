import CardSectionCSS from '../styles/CardSection.module.css'
import { cards } from '../data/cards'

export default function CardSection(props) {
  return (
    <div className={CardSectionCSS.cardContainer}>
      {cards.map((card) => (
        <div className={CardSectionCSS.card}> {card.name} </div>
      ))}
    </div>
  )
}
