export default function Header(props) {
  const { currentScore, highScore } = props
  return (
    <div>
      <h1>Memory Card Game</h1>
      <div>Select as many cards as possible without selecting the same card twice</div>
      <div>Current score: {currentScore}</div>
      <div>High score: {highScore}</div>
    </div>
  )
}
