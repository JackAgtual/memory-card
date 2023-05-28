import HeaderCSS from '../styles/Header.module.css'

type HeaderProps = {
  currentScore: number
  highScore: number
  fetchImages: () => void // TODO: check function signature
}

export default function Header({ currentScore, highScore, fetchImages }: HeaderProps) {
  return (
    <div className={HeaderCSS.header}>
      <div>
        <h1 className={HeaderCSS.title}>Memory Card Game</h1>
        <div>Select as many cards as possible without selecting the same card twice</div>
      </div>
      <div className={HeaderCSS.score}>
        <div>Current score: {currentScore}</div>
        <div>High score: {highScore}</div>
        <button className={HeaderCSS.newCardsBtn} onClick={fetchImages}>
          Get new cards
        </button>
      </div>
    </div>
  )
}
