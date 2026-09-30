import { useState } from 'react'
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { AddTopicDialog } from '../components/AddTopicDialog.jsx'
import { Header } from '../components/Header.jsx'
import { Sidebar } from '../components/Sidebar.jsx'

export function DashboardLayout({ user, topics, theme, onThemeChange, onLogout, onAddTopic }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false)
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const query = searchParams.get('q') || ''
  const topicMatch = location.pathname.match(/^\/dashboard\/topics\/([^/]+)/)
  const activeTopicId = topicMatch ? topicMatch[1] : location.pathname === '/dashboard/search' ? '' : 'home'
  const activeTopic = topics.find(topic => topic.id === activeTopicId)
  const sectionLabel = location.pathname === '/dashboard/search' ? 'Search results' : activeTopic?.name || 'Interview prep'
  const breadcrumbLabel = location.pathname.startsWith('/dashboard/topics/') ? 'Study paths' : 'Study room'

  function selectTopic(topicId) {
    navigate(topicId === 'home' ? '/dashboard' : `/dashboard/topics/${topicId}`)
    setIsSidebarOpen(false)
  }

  function updateSearch(value) {
    if (!value.trim()) {
      navigate('/dashboard')
      return
    }
    navigate(`/dashboard/search?q=${encodeURIComponent(value)}`, {
      replace: location.pathname === '/dashboard/search',
    })
    setIsSidebarOpen(false)
  }

  function addTopic(data) {
    onAddTopic(data)
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
          onQueryChange={updateSearch}
          theme={theme}
          onThemeChange={onThemeChange}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          user={user}
          onLogout={onLogout}
          breadcrumbLabel={breadcrumbLabel}
          sectionLabel={sectionLabel}
        />
        <main className="page-content"><Outlet context={{ topics, onSelectTopic: selectTopic }} /></main>
      </div>
      {isAddTopicOpen && <AddTopicDialog onClose={() => setIsAddTopicOpen(false)} onSave={addTopic} />}
    </div>
  )
}