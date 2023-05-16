export default function Header(props) {
  const { currentScore, highScore, fetchImages } = props

  return (
    <div>
      <h1>Memory Card Game</h1>
      <div>Select as many cards as possible without selecting the same card twice</div>
      <div>Current score: {currentScore}</div>
      <div>High score: {highScore}</div>
      <button onClick={fetchImages}>Get new cards</button>
    </div>
  )
}
