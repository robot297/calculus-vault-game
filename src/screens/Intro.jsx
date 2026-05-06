import { motion } from 'framer-motion'
import Layout   from '../components/Layout.jsx'
import NavButton from '../components/NavButton.jsx'

export default function Intro({ navigate }) {
  return (
    <Layout accentColor="gold">
      {/* Lock icon */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
        className="text-7xl select-none"
      >
        🔐
      </motion.div>

      {/* Title */}
      <div className="text-center space-y-1">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-widest text-vault-gold text-glow-gold animate-flicker">
          THE CALCULUS VAULT
        </h1>
        <p className="text-vault-gold/60 tracking-[0.3em] text-sm uppercase">
          A Derivative Escape Room
        </p>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-vault-gold/30" />

      {/* Story text */}
      <div className="border-glow-gold bg-vault-panel rounded-xl px-6 py-5 text-center">
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
          You've been trapped in the <span className="text-vault-gold font-bold">Calculus Vault</span> by
          the rogue AI, <span className="text-vault-gold font-bold">DERIVA</span>.
        </p>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
          To escape, you must crack the <span className="text-vault-gold">4-digit vault code</span> by
          solving four derivative challenges. Each correct answer reveals one digit.
        </p>
        <p className="mt-3 text-vault-gold/70 text-xs tracking-widest uppercase">
          Good luck — DERIVA is watching.
        </p>
      </div>

      {/* Puzzle progress dots */}
      <div className="flex gap-3">
        {[1,2,3,4].map(n => (
          <div
            key={n}
            className="w-3 h-3 rounded-full border border-vault-gold/40 bg-vault-panel"
          />
        ))}
      </div>

      {/* CTA */}
      <NavButton onClick={() => navigate('puzzle-1')} variant="gold">
        ▶ &nbsp; BEGIN
      </NavButton>

      {/* Slide number */}
      <span className="absolute bottom-4 right-6 text-vault-gold/30 text-xs tracking-widest">
        00 / 04
      </span>
    </Layout>
  )
}
