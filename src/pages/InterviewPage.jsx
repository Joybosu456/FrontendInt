import { useMemo, useState } from 'react'
import { QuestionCard } from '../components/QuestionCard.jsx'

export function InterviewPage({ topic }) {
  const [filter, setFilter] = useState('All questions')
  const filters = ['All questions', ...new Set(topic.questions.map((item) => item.category))]
  const selectedFilter = filters.includes(filter) ? filter : 'All questions'
  const questions = useMemo(() => selectedFilter === 'All questions'
    ? topic.questions
    : topic.questions.filter((item) => item.category === selectedFilter), [selectedFilter, topic])
  const topicNumber = ['javascript', 'react', 'html', 'css', 'machine-coding', 'redux'].indexOf(topic.id)

  return (
    <div className="interview-page page-enter">
      <div className="topic-breadcrumb"><span>STUDY PATHS</span><i>/</i><strong>{topic.name.toUpperCase()}</strong></div>
      <section className={`topic-hero topic-hero--${topic.color}`}>
        <div className="topic-hero-copy">
          <div className="topic-hero-meta"><span>{topic.level}</span><i>·</i><span>{topic.questions.length} questions</span></div>
          <h1>{topic.name}<span className="topic-title-period">.</span></h1>
          <p>{topic.description}</p>
          <div className="topic-progress"><span><i style={{ width: `${Math.min(topic.questions.length * 14, 100)}%` }} /></span><small>YOUR STUDY PATH <b>{String(topicNumber + 1 || 5).padStart(2, '0')}</b></small></div>
        </div>
        <div className="topic-hero-mark" aria-hidden="true"><span>{topic.shortName}</span><i>✳</i></div>
      </section>

      <section className="question-section">
        <div className="question-section-heading">
          <div><div className="section-eyebrow">PRACTICE AT YOUR PACE</div><h2>Questions &amp; answers</h2></div>
          <span className="question-total"><b>{String(questions.length).padStart(2, '0')}</b> IN THIS VIEW</span>
        </div>
        <div className="question-filters" role="group" aria-label="Filter questions">
          {filters.map((item) => <button className={selectedFilter === item ? 'filter-chip filter-chip--active' : 'filter-chip'} key={item} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="question-list">
          {questions.length ? questions.map((item, index) => <QuestionCard key={item.id} item={item} index={index} />) : <div className="empty-questions">No questions in this level yet. Try another filter.</div>}
        </div>
      </section>
      <footer className="page-footer"><span>{topic.name.toUpperCase()} / INTERVIEW PRACTICE</span><span>Take it one question at a time <i>✳</i></span></footer>
    </div>
  )
}