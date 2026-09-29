import { useState } from 'react'

export function QuestionCard({ item, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className={`question-card${isOpen ? ' question-card--open' : ''}`}>
      <button className="question-trigger" aria-expanded={isOpen} onClick={() => setIsOpen((current) => !current)}>
        <span className="question-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="question-text">{item.question}</span>
        <span className="question-category">{item.category}</span>
        <span className="question-chevron" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="answer-content">
          <div className="answer-label"><span>ANSWER NOTES</span><i /></div>
          <div className="answer-details">
            {item.answer
              ? <p>{item.answer}</p>
              : <p className="answer-pending">Answers are included for Advanced HTML and Scenario-Based questions in this study set.</p>}
            {item.example && (
              <div className="answer-example">
                <div className="example-header"><span>Example</span><span>{item.language || 'JavaScript'}</span></div>
                <pre><code>{item.example}</code></pre>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  )
}