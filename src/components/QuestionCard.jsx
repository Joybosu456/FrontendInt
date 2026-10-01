import { useState } from 'react'

export function QuestionCard({ item, index }) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  async function copyQuestion() {
    try {
      await navigator.clipboard.writeText(item.question)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article className={`question-card${isOpen ? ' question-card--open' : ''}`}>
      <div className="question-row">
        <button className="question-trigger" aria-expanded={isOpen} onClick={() => setIsOpen((current) => !current)}>
          <span className="question-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="question-text">{item.question}</span>
          <span className="question-category">{item.category}</span>
          <span className="question-chevron" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
        <button
          className={`question-copy-button${copied ? ' question-copy-button--copied' : ''}`}
          type="button"
          aria-label={copied ? 'Question copied' : 'Copy question'}
          title={copied ? 'Question copied' : 'Copy question'}
          onClick={copyQuestion}
        >
          {copied ? (
            <><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg><span>Copied</span></>
          ) : (
            <><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg><span>Copy</span></>
          )}
        </button>
      </div>
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