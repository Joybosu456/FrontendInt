import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { RequireAuth } from './routes/RequireAuth.jsx'
import { DashboardLayout } from './routes/DashboardLayout.jsx'
import { interviewTopics } from './data/interviewTopics.js'
import './css/app.css'

const HomePage = lazy(() => import('./pages/HomePage.jsx').then(module => ({ default: module.HomePage })))
const InterviewPage = lazy(() => import('./pages/InterviewPage.jsx').then(module => ({ default: module.InterviewPage })))
const SearchResults = lazy(() => import('./pages/SearchResults.jsx').then(module => ({ default: module.SearchResults })))
const LoginPage = lazy(() => import('./pages/LoginPage.jsx').then(module => ({ default: module.LoginPage })))

const CUSTOM_TOPICS_KEY = 'prepdesk-custom-topics'
const THEME_KEY = 'prepdesk-theme'
const USER_SESSION_KEY = 'prepdesk-user-session'

function readLocalStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key)
    return saved === null ? fallback : JSON.parse(saved)
  } catch {
    return fallback
  }
}

function TopicRoute() {
  const { topics } = useOutletContext()
  const { topicId } = useParams()
  const topic = topics.find(item => item.id === topicId)
  return topic ? <InterviewPage topic={topic} /> : <Navigate to="/dashboard" replace />
}

function SearchRoute() {
  const { topics, onSelectTopic } = useOutletContext()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  return <SearchResults query={query} topics={topics} onSelectTopic={onSelectTopic} />
}

function AppRoutes() {
  const navigate = useNavigate()
  const [user, setUser] = useState(() => readLocalStorage(USER_SESSION_KEY, null))
  const [customTopics, setCustomTopics] = useState(() => {
    const saved = readLocalStorage(CUSTOM_TOPICS_KEY, [])
    return Array.isArray(saved) ? saved : []
  })
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY)
    return saved === 'dark' || saved === 'light' ? saved : readLocalStorage(THEME_KEY, 'light')
  })
  const topics = useMemo(() => [...interviewTopics, ...customTopics], [customTopics])

  useEffect(() => {
    localStorage.setItem(CUSTOM_TOPICS_KEY, JSON.stringify(customTopics))
  }, [customTopics])

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  function logIn(credentials) {
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(credentials))
    setUser(credentials)
    navigate('/dashboard', { replace: true })
  }

  function logOut() {
    localStorage.removeItem(USER_SESSION_KEY)
    setUser(null)
    navigate('/login', { replace: true })
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
    setCustomTopics(current => [...current, topic])
    navigate(`/dashboard/topics/${id}`)
  }

  return (
    <Suspense fallback={<div className="route-loading" role="status">Opening your workspace...</div>}>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={logIn} />} />
        <Route element={<RequireAuth user={user} />}>
          <Route element={<DashboardLayout user={user} topics={topics} theme={theme} onThemeChange={setTheme} onLogout={logOut} onAddTopic={addTopic} />}>
            <Route path="/dashboard" element={<HomePage topics={topics} onSelectTopic={topicId => navigate(`/dashboard/topics/${topicId}`)} />} />
            <Route path="/dashboard/topics/:topicId" element={<TopicRoute />} />
            <Route path="/dashboard/search" element={<SearchRoute />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App