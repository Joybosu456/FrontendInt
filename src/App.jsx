import { useEffect, useMemo, useState } from 'react'
import { AddTopicDialog } from './components/AddTopicDialog.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { InterviewPage } from './pages/InterviewPage.jsx'
import { SearchResults } from './pages/SearchResults.jsx'
import { interviewTopics } from './data/interviewTopics.js'
import './css/app.css'

const CUSTOM_TOPICS_KEY = 'prepdesk-custom-topics'
const THEME_KEY = 'prepdesk-theme'

function loadCustomTopics() {
  try {
    const value = JSON.parse(localStorage.getItem(CUSTOM_TOPICS_KEY) || '[]')
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

function App() {
  const [customTopics, setCustomTopics] = useState(loadCustomTopics)
  const [activeTopicId, setActiveTopicId] = useState('home')
  const [query, setQuery] = useState('')
  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'light')
  const topics = useMemo(() => [...interviewTopics, ...customTopics], [customTopics])
  const activeTopic = topics.find((topic) => topic.id === activeTopicId)

  useEffect(() => {
    localStorage.setItem(CUSTOM_TOPICS_KEY, JSON.stringify(customTopics))
  }, [customTopics])

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  function selectTopic(topicId) {
    setActiveTopicId(topicId)
    setQuery('')
    setIsSidebarOpen(false)
  }

  function addTopic({ name, question, answer }) {
    const id = `custom-${Date.now()}`
    const topic = {
      id,
      name,
      shortName: name.slice(0, 2).toUpperCase(),
      color: 'custom',
      description: `Your own ${name} interview study set.`,
      level: 'Custom',
      questions: [{ id: `${id}-question`, category: 'Fundamentals', question, answer }],
    }
    setCustomTopics((current) => [...current, topic])
    setActiveTopicId(id)
    setQuery('')
    setIsAddTopicOpen(false)
  }

  return (
    <div className="app-shell" data-theme={theme}>
      {isSidebarOpen && <button className="sidebar-backdrop" aria-label="Close navigation" onClick={() => setIsSidebarOpen(false)} />}
      <Sidebar
        topics={topics}
        activeTopicId={activeTopicId}
        isOpen={isSidebarOpen}
        onSelect={selectTopic}
        onAddTopic={() => setIsAddTopicOpen(true)}
      />

      <div className="main-column">
        <Header
          query={query}
          onQueryChange={setQuery}
          theme={theme}
          onThemeChange={setTheme}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />

        <main className="page-content">
          {query.trim() ? (
            <SearchResults query={query.trim()} topics={topics} onSelectTopic={selectTopic} />
          ) : activeTopic ? (
            <InterviewPage topic={activeTopic} />
          ) : (
            <HomePage topics={topics} onSelectTopic={selectTopic} />
          )}
        </main>
      </div>

      {isAddTopicOpen && <AddTopicDialog onClose={() => setIsAddTopicOpen(false)} onSave={addTopic} />}
    </div>
  )
}

export default App