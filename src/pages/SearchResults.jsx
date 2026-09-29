import { QuestionCard } from '../components/QuestionCard.jsx'

export function SearchResults({ query, topics, onSelectTopic }) {
  const normalizedQuery = query.toLowerCase()
  const matches = topics.flatMap((topic) => topic.questions
    .filter((item) => `${item.question} ${item.answer || ''} ${topic.name}`.toLowerCase().includes(normalizedQuery))
    .map((item) => ({ ...item, topic })))

  return (
    <section className="search-results page-enter">
      <div className="topic-breadcrumb"><span>YOUR WORKSPACE</span><i>/</i><strong>SEARCH</strong></div>
      <div className="search-results-heading"><div className="section-eyebrow">FIND YOUR NEXT ANSWER</div><h1>Search results<span>.</span></h1><p>{matches.length} {matches.length === 1 ? 'question' : 'questions'} matching “{query}”</p></div>
      {matches.length ? (
        <div className="question-list search-question-list">
          {matches.map((item, index) => (
            <div className="search-result-item" key={`${item.topic.id}-${item.id}`}>
              <button className="result-topic-link" onClick={() => onSelectTopic(item.topic.id)}><span className={`topic-mark topic-mark--${item.topic.color}`}>{item.topic.shortName}</span>{item.topic.name}<span>↗</span></button>
              <QuestionCard item={item} index={index} />
            </div>
          ))}
        </div>
      ) : <div className="no-search-results"><span>⌕</span><h2>No matches just yet</h2><p>Try a different phrase or search for a topic like React or CSS.</p></div>}
    </section>
  )
}