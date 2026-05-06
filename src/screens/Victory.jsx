import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout    from '../components/Layout.jsx'
import NavButton from '../components/NavButton.jsx'
import { PUZZLES } from '../data/puzzles.js'

const CODE = PUZZLES.map(p => p.digit)

function Confetti() {
  const [particles] = useState(() =>
    Array.from({ length: 38 }, (_, i) => ({
      id: i,
      x:    Math.random() * 100,
      delay: Math.random() * 1.2,
      dur:   1.6 + Math.random() * 1.4,
      color: ['#FFD700','#FFF','#00FF88','#FF6B6B','#6BDFFF'][i % 5],
      size:  6 + Math.random() * 8,
    }))
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, opacity: 1, rotate: 0 }}
          animate={{ y: '110vh', opacity: [1, 1, 0], rotate: 360 }}
          transition={{ duration: p.dur, delay: p.delay, ease: 'easeIn', repeat: Infinity, repeatDelay: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            width:  p.size,
            height: p.size,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  )
}

export default function Victory({ navigate }) {
  const [revealed, setRevealed] = useState([])

  // Stagger-reveal the code digits
  useEffect(() => {
    CODE.forEach((_, i) => {
      setTimeout(() => setRevealed(prev => [...prev, i]), 400 + i * 300)
    })
  }, [])

  return (
    <>
      <Confetti />
      <Layout accentColor="gold" className="relative z-10">
        {/* Trophy */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          className="text-7xl select-none"
        >
          🏆
        </motion.div>

        {/* Header */}
        <div className="text-center space-y-1">
          <p className="text-green-400 text-xs tracking-[0.4em] uppercase">
            All Puzzles Complete
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-vault-gold text-glow-gold animate-flicker">
            VAULT UNLOCKED
          </h2>
        </div>

        {/* Code display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="
            w-full border-glow-gold bg-vault-panel rounded-xl
            px-6 py-8 text-center space-y-4
          "
        >
          <p className="text-vault-gold/60 text-xs tracking-[0.4em] uppercase">
            The Vault Code
          </p>

          {/* Digit row */}
          <div className="flex justify-center gap-4">
            {CODE.map((digit, i) => (
              <AnimatePresence key={i}>
                {revealed.includes(i) ? (
                  <motion.div
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1,   opacity: 1 }}
                    className="
                      w-16 h-20 flex flex-col items-center justify-center
                      border-2 border-vault-gold rounded-lg
                      shadow-gold-lg
                    "
                  >
                    <span className="text-4xl font-bold text-vault-gold text-glow-gold tabular-nums">
                      {digit}
                    </span>
                    <span className="text-vault-gold/40 text-[9px] tracking-widest mt-1">
                      {['1ST','2ND','3RD','4TH'][i]}
                    </span>
                  </motion.div>
                ) : (
                  <div className="w-16 h-20 border-2 border-vault-gold/20 rounded-lg flex items-center justify-center">
                    <span className="text-vault-gold/20 text-2xl">?</span>
                  </div>
                )}
              </AnimatePresence>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-gray-300 text-sm leading-relaxed"
          >
            You've defeated <span className="text-vault-gold font-bold">DERIVA</span>!
            Submit the code and your written work to confirm your escape.
          </motion.p>
        </motion.div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="w-full grid grid-cols-2 gap-2 text-center"
        >
          {['Power Rule','Chain Rule','Product Rule','Tangent Lines'].map(skill => (
            <div
              key={skill}
              className="
                bg-vault-panel border border-vault-gold/25 rounded-lg
                px-3 py-2 text-xs text-vault-gold/70 tracking-wide
              "
            >
              ✓ {skill}
            </div>
          ))}
        </motion.div>

        {/* Congratulations line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="text-vault-gold/50 text-xs tracking-[0.3em] uppercase text-center"
        >
          Congratulations — you are a true Calculus Champion.
        </motion.p>

        {/* Play again */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0 }}
        >
          <NavButton onClick={() => navigate('intro')} variant="outline">
            ↺ &nbsp; Play Again
          </NavButton>
        </motion.div>
      </Layout>
    </>
  )
}
