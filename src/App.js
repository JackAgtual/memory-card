import { useState } from 'react'
import Header from './components/Header'
import CardSection from './components/CardSection'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore} />
      <CardSection />
    </div>
  )
}

export default App
