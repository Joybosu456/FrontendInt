import { useState } from 'react'

export function AddTopicDialog({ onClose, onSave }) {
  const [name, setName] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const cleanName = name.trim()
    const cleanQuestion = question.trim()
    const cleanAnswer = answer.trim()
    if (!cleanName || !cleanQuestion || !cleanAnswer) return
    onSave({ name: cleanName, question: cleanQuestion, answer: cleanAnswer })
  }

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="add-topic-dialog" role="dialog" aria-modal="true" aria-labelledby="add-topic-title">
        <button className="dialog-close" onClick={onClose} aria-label="Close dialog">×</button>
        <div className="dialog-kicker">BUILD YOUR OWN STUDY SET</div>
        <h2 id="add-topic-title">Add an interview topic</h2>
        <p className="dialog-description">Create a topic and add its first question and answer. You can keep expanding your study list from here.</p>
        <form className="topic-form" onSubmit={handleSubmit}>
          <label>Topic name<input autoFocus maxLength={36} value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. TypeScript" required /></label>
          <label>First interview question<input maxLength={140} value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="What would you like to practice?" required /></label>
          <label>Answer notes<textarea maxLength={800} value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Write a clear answer to review later..." rows={4} required /></label>
          <div className="dialog-actions"><button className="cancel-button" type="button" onClick={onClose}>Cancel</button><button className="save-topic-button" type="submit">Add topic <span>↗</span></button></div>
        </form>
      </section>
    </div>
  )
}