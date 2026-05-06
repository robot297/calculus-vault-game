import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import Intro        from './screens/Intro.jsx'
import PuzzleScreen from './screens/PuzzleScreen.jsx'
import DigitReveal  from './screens/DigitReveal.jsx'
import TryAgain     from './screens/TryAgain.jsx'
import Victory      from './screens/Victory.jsx'

import { PUZZLE_MAP, CORRECT_MAP, TRY_MAP } from './data/puzzles.js'

export default function App() {
  const [screen, setScreen]       = useState('intro')
  const [unlockedDigits, setUnlocked] = useState([])

  const navigate = useCallback((target) => {
    setScreen(target)
  }, [])

  const onCorrect = useCallback((puzzleId, digit) => {
    setUnlocked(prev =>
      prev.find(d => d.id === puzzleId) ? prev : [...prev, { id: puzzleId, digit }]
    )
  }, [])

  const renderScreen = () => {
    if (screen === 'intro')   return <Intro   key="intro"   navigate={navigate} />
    if (screen === 'victory') return <Victory key="victory" digits={unlockedDigits} navigate={navigate} />

    const puzzle = PUZZLE_MAP[screen]
    if (puzzle) return (
      <PuzzleScreen key={screen} puzzle={puzzle} navigate={navigate} onCorrect={onCorrect} />
    )

    const correctPuzzle = CORRECT_MAP[screen]
    if (correctPuzzle) return (
      <DigitReveal key={screen} puzzle={correctPuzzle} navigate={navigate} />
    )

    const tryPuzzle = TRY_MAP[screen]
    if (tryPuzzle) return (
      <TryAgain key={screen} puzzle={tryPuzzle} navigate={navigate} />
    )

    // Fallback
    return <Intro key="intro-fallback" navigate={navigate} />
  }

  return (
    <div className="min-h-screen bg-vault-bg bg-grid font-mono">
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>
    </div>
  )
}
