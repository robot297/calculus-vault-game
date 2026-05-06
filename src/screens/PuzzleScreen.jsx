import Layout       from '../components/Layout.jsx'
import AnswerButton  from '../components/AnswerButton.jsx'

export default function PuzzleScreen({ puzzle, navigate, onCorrect }) {
  const { id, number, title, concept, question, expression, hint, answers,
          correctScreen, wrongScreen, digit } = puzzle

  const handleSelect = (isCorrect) => {
    if (isCorrect) {
      onCorrect(id, digit)
      navigate(correctScreen)
    } else {
      navigate(wrongScreen)
    }
  }

  return (
    <Layout accentColor="gold">
      {/* Puzzle header */}
      <div className="w-full text-center space-y-1">
        <p className="text-vault-gold/50 text-xs tracking-[0.35em] uppercase">
          Puzzle {number} of 4
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-vault-gold text-glow-gold">
          {title}
        </h2>
        <p className="text-vault-gold/60 text-xs tracking-widest uppercase">
          Concept: {concept}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-vault-gold/25" />

      {/* Question panel */}
      <div className="w-full border-glow-gold bg-vault-panel rounded-xl px-6 py-5 text-center space-y-3">
        <p className="text-gray-300 text-sm sm:text-base">{question}</p>
        {expression && (
          <p className="text-vault-gold font-bold text-lg sm:text-xl tracking-wide text-glow-gold">
            {expression}
          </p>
        )}
        {hint && (
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed whitespace-pre-line mt-2 border-t border-vault-gold/20 pt-3">
            {hint}
          </p>
        )}
      </div>

      {/* Answer grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        {answers.map((ans) => (
          <AnswerButton
            key={ans.label}
            label={ans.label}
            text={ans.text}
            correct={ans.correct}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Slide number */}
      <span className="absolute bottom-4 right-6 text-vault-gold/30 text-xs tracking-widest">
        {String(id).padStart(2, '0')} / 04
      </span>
    </Layout>
  )
}
