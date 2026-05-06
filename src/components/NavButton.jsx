import { motion } from 'framer-motion'

/**
 * Primary navigation / action button.
 * variant: 'gold' (filled) | 'outline' (ghost)
 */
export default function NavButton({ children, onClick, variant = 'gold', className = '' }) {
  const base = `
    px-8 py-3 rounded-lg font-mono font-bold text-sm tracking-widest uppercase
    transition-all duration-200 cursor-pointer border
  `
  const variants = {
    gold: `
      bg-vault-gold text-vault-bg border-vault-gold
      hover:brightness-110 hover:shadow-gold-lg
      active:scale-95
    `,
    outline: `
      bg-transparent text-vault-gold border-vault-gold
      hover:bg-vault-gold/10 hover:shadow-gold
      active:scale-95
    `,
    red: `
      bg-transparent text-vault-red border-vault-red
      hover:bg-vault-red/10 hover:shadow-red
      active:scale-95
    `,
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`${base} ${variants[variant] ?? variants.gold} ${className}`}
    >
      {children}
    </motion.button>
  )
}
