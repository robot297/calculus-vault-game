import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -18, transition: { duration: 0.25, ease: 'easeIn' } },
}

/**
 * Full-screen centered layout wrapper with fade+slide transitions.
 * @param {string}  accentColor  'gold' | 'red' | 'green'  (default: 'gold')
 */
export default function Layout({ children, accentColor = 'gold', className = '' }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`
        min-h-screen flex flex-col items-center justify-center
        px-4 py-8 screen-scroll
        ${className}
      `}
    >
      {/* Corner brackets — decorative vault UI chrome */}
      <CornerBrackets color={accentColor} />

      <div className="w-full max-w-2xl flex flex-col items-center gap-6 relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

function CornerBrackets({ color }) {
  const c = color === 'red' ? '#FF4444' : '#FFD700'
  const style = { borderColor: c, opacity: 0.5 }
  const cls   = 'absolute w-8 h-8 border-2'
  return (
    <>
      <span className={`${cls} top-4 left-4 border-r-0 border-b-0`}   style={style} />
      <span className={`${cls} top-4 right-4 border-l-0 border-b-0`}  style={style} />
      <span className={`${cls} bottom-4 left-4 border-r-0 border-t-0`} style={style} />
      <span className={`${cls} bottom-4 right-4 border-l-0 border-t-0`} style={style} />
    </>
  )
}
