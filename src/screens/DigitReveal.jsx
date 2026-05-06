import { motion } from 'framer-motion'
import Layout    from '../components/Layout.jsx'
import NavButton from '../components/NavButton.jsx'

export default function DigitReveal({ puzzle, navigate }) {
  const { digitLabel, digit, digitHint, nextScreen, number } = puzzle
  const isLast = nextScreen === 'victory'

  return (
    <Layout accentColor="gold">
      {/* Unlock icon */}
      <motion.div
        initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
        animate={{ scale: 1,   rotate: 0,   opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="text-6xl select-none"
      >
        🔓
      </motion.div>

      {/* Header */}
      <div className="text-center space-y-1">
        <p className="text-green-400 text-xs tracking-[0.4em] uppercase">
          Access Granted
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-vault-gold text-glow-gold">
          DIGIT UNLOCKED
        </h2>
      </div>

      {/* Digit reveal card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="
          w-full border-glow-gold bg-vault-panel rounded-xl
          px-6 py-8 text-center space-y-4
        "
      >
        <p className="text-vault-gold/60 text-xs tracking-widest uppercase">
          {digitLabel}
        </p>

        {/* Big digit */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ delay: 0.35 }}
          className="
            text-8xl font-bold text-vault-gold text-glow-gold
            animate-pulse_gold tabular-nums
          "
        >
          {digit}
        </motion.p>

        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          {digitHint}
        </p>
      </motion.div>

      {/* CTA */}
      <NavButton
        onClick={() => navigate(nextScreen)}
        variant="gold"
      >
        {isLast ? '🏆  Final Step →' : 'Next Puzzle →'}
      </NavButton>

      {/* Slide number */}
      <span className="absolute bottom-4 right-6 text-vault-gold/30 text-xs tracking-widest">
        {String(number).padStart(2, '0')} / 04
      </span>
    </Layout>
  )
}
