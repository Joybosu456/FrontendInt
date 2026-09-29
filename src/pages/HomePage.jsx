import { interviewTips } from '../data/interviewTopics.js'

const topicNotes = {
  javascript: 'Build confidence in the language fundamentals behind modern web apps.',
  react: 'Practice the component and state questions frontend teams ask most.',
  html: 'Get comfortable explaining structure, semantics, and accessibility.',
  css: 'Review layout, cascade, and responsive design with clear examples.',
}

export function HomePage({ topics, onSelectTopic }) {
  const totalQuestions = topics.reduce((total, topic) => total + topic.questions.length, 0)

  return (
    <div className="home-page page-enter">
      <section className="welcome-banner">
        <div className="welcome-copy">
          <div className="section-eyebrow"><span className="eyebrow-line" />YOUR NEXT CHAPTER STARTS HERE</div>
          <h1>Show up ready.<br /><em>Be remembered.</em></h1>
          <p>A practical little space to sharpen your thinking, find your words, and walk into your next interview with confidence.</p>
          <button className="welcome-cta" onClick={() => onSelectTopic(topics[0]?.id || 'home')}>Start practicing <span>↗</span></button>
        </div>
        <div className="welcome-art" aria-hidden="true">
          <div className="art-sun" />
          <div className="art-ring art-ring--one" />
          <div className="art-ring art-ring--two" />
          <div className="art-card art-card--back"><span>THINK</span><i>✳</i></div>
          <div className="art-card art-card--front"><span>PREP</span><b>01</b><i /></div>
          <span className="art-caption">YOUR IDEAS, IN GOOD FORM</span>
        </div>
        <div className="banner-foot"><span>01 / YOUR INTERVIEW WORKSPACE</span><span>{topics.length} TOPICS <i>·</i> {totalQuestions} QUESTIONS</span></div>
      </section>

      <section className="home-section topic-section">
        <div className="section-heading">
          <div><div className="section-eyebrow">PICK UP A THREAD</div><h2>Your study paths</h2></div>
          <span className="section-side-note">Choose a topic to explore <b>↓</b></span>
        </div>
        <div className="topic-card-grid">
          {topics.map((topic, index) => (
            <button className="topic-card" key={topic.id} onClick={() => onSelectTopic(topic.id)}>
              <span className={`topic-card-mark topic-card-mark--${topic.color}`}>{topic.shortName}</span>
              <span className="topic-card-number">0{index + 1}</span>
              <strong>{topic.name}</strong>
              <small>{topicNotes[topic.id] || topic.description}</small>
              <span className="topic-card-foot"><span>{topic.questions.length} QUESTIONS</span><b>↗</b></span>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section tips-section">
        <div className="section-heading">
          <div><div className="section-eyebrow">A LITTLE FIELDCRAFT</div><h2>Interview notes</h2></div>
          <span className="section-side-note">The small things matter <b>✳</b></span>
        </div>
        <div className="tips-grid">
          {interviewTips.map((tip) => (
            <article className={`tip-card tip-card--${tip.color}`} key={tip.number}>
              <div className="tip-card-top"><span>{tip.number}</span><i /></div>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="page-footer"><span>PREPDESK / INTERVIEW PRACTICE</span><span>Made for the work ahead <i>✳</i></span></footer>
    </div>
  )
}