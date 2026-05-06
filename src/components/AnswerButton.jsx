import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * Answer choice button.
 * Shows label (A/B/C/D) on the left, answer text on the right.
 * Flash red briefly on wrong, green on correct before navigating.
 */
export default function AnswerButton({ label, text, correct, onSelect }) {
  const [state, setState] = useState('idle') // 'idle' | 'correct' | 'wrong'

  const handleClick = () => {
    if (state !== 'idle') return
    const result = correct ? 'correct' : 'wrong'
    setState(result)
    setTimeout(() => onSelect(correct), 420)
  }

  const borderColor =
    state === 'correct' ? 'border-green-400 shadow-[0_0_14px_rgba(74,222,128,0.5)]' :
    state === 'wrong'   ? 'border-vault-red  shadow-red' :
    'border-vault-gold hover:shadow-gold hover:border-opacity-100'

  const bgColor =
    state === 'correct' ? 'bg-green-900/40' :
    state === 'wrong'   ? 'bg-red-900/40'   :
    'bg-vault-panel hover:bg-[#132840]'

  return (
    <motion.button
      whileHover={{ scale: state === 'idle' ? 1.02 : 1 }}
      whileTap={  { scale: state === 'idle' ? 0.97 : 1 }}
      onClick={handleClick}
      disabled={state !== 'idle'}
      className={`
        w-full flex items-center gap-4 px-4 py-3
        border rounded-lg font-mono text-left
        transition-all duration-200 cursor-pointer
        ${borderColor} ${bgColor}
      `}
    >
      {/* Label badge */}
      <span
        className="
          flex-shrink-0 w-8 h-8 flex items-center justify-center
          rounded border border-vault-gold text-vault-gold
          text-sm font-bold
        "
      >
        {label}
      </span>

      {/* Answer text */}
      <span className="text-white text-sm sm:text-base leading-snug">
        {text}
      </span>
    </motion.button>
  )
}
