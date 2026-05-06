import { motion } from 'framer-motion'
import Layout    from '../components/Layout.jsx'
import NavButton from '../components/NavButton.jsx'

export default function TryAgain({ puzzle, navigate }) {
  const { screen, number, title, tryAgainHint } = puzzle

  return (
    <Layout accentColor="red">
      {/* Denied icon */}
      <motion.div
        initial={{ scale: 1.4, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="text-6xl select-none"
      >
        ❌
      </motion.div>

      {/* Header */}
      <div className="text-center space-y-1">
        <p className="text-vault-red/70 text-xs tracking-[0.4em] uppercase">
          Puzzle {number} of 4 — {title}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-vault-red text-glow-red">
          ACCESS DENIED
        </h2>
      </div>

      {/* Hint panel */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ delay: 0.2 }}
        className="
          w-full border-glow-red bg-vault-panel rounded-xl
          px-6 py-5 text-center
        "
      >
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {tryAgainHint}
        </p>
      </motion.div>

      {/* CTA */}
      <NavButton
        onClick={() => navigate(screen)}
        variant="outline"
      >
        ← Try Again
      </NavButton>

      {/* Slide number */}
      <span className="absolute bottom-4 right-6 text-vault-gold/30 text-xs tracking-widest">
        {String(number).padStart(2, '0')} / 04
      </span>
    </Layout>
  )
}
