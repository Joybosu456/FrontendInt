import { useState } from 'react'

export function Sidebar({ topics, activeTopicId, isOpen, onSelect, onAddTopic }) {
  const [filter, setFilter] = useState('')
  const visibleTopics = topics.filter((topic) => topic.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <aside className={`sidebar${isOpen ? ' sidebar--open' : ''}`} aria-label="Main navigation">
      <button className="brand-lockup" onClick={() => onSelect('home')} aria-label="Prepdesk home">
        <span className="brand-icon"><span /></span>
        <span>prepdesk<span className="brand-dot">.</span></span>
      </button>

      <div className="sidebar-label">YOUR WORKSPACE</div>
      <nav className="primary-nav" aria-label="Pages">
        <button className={`nav-item${activeTopicId === 'home' ? ' nav-item--active' : ''}`} onClick={() => onSelect('home')}>
          <span className="nav-symbol nav-symbol--home">⌂</span><span>Home</span><span className="nav-shortcut">01</span>
        </button>
      </nav>

      <div className="sidebar-section-head">
        <span>INTERVIEW TOPICS</span>
        <span className="topic-count">{topics.length.toString().padStart(2, '0')}</span>
      </div>
      <label className="sidebar-filter">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
        <input value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Filter topics" aria-label="Filter interview topics" />
      </label>
      <nav className="topic-nav" aria-label="Interview topics">
        {visibleTopics.map((topic) => (
          <button className={`nav-item topic-nav-item${activeTopicId === topic.id ? ' nav-item--active' : ''}`} key={topic.id} onClick={() => onSelect(topic.id)}>
            <span className={`topic-mark topic-mark--${topic.color}`}>{topic.shortName}</span>
            <span className="topic-nav-name">{topic.name}</span>
            <span className="topic-question-count">{topic.questions.length}</span>
          </button>
        ))}
        {visibleTopics.length === 0 && <p className="no-topics">No topics match that search.</p>}
      </nav>

      <button className="add-topic-button" onClick={onAddTopic}>
        <span className="add-topic-plus">+</span><span>Add a topic</span>
      </button>

      <div className="sidebar-bottom-note">
        <span className="sidebar-note-mark">✳</span>
        <span>Small steps make<br />strong interviews.</span>
      </div>
    </aside>
  )
}