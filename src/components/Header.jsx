import { useState } from 'react'

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
}

function SettingsIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /><path d="m19.4 15 .1.1 1.2.9-1.2 2.1-1.4-.6a7.8 7.8 0 0 1-1.5.9l-.2 1.5h-2.5l-.3-1.5a7.8 7.8 0 0 1-1.6-.6l-1.3.8-1.8-1.8.8-1.3a7.8 7.8 0 0 1-.6-1.6l-1.5-.3v-2.5l1.5-.3a7.8 7.8 0 0 1 .6-1.6l-.8-1.3 1.8-1.8 1.3.8a7.8 7.8 0 0 1 1.6-.6l.3-1.5h2.5l.2 1.5a7.8 7.8 0 0 1 1.5.9l1.4-.6 1.2 2.1-1.2.9a7.8 7.8 0 0 1 0 2.4Z" /></svg>
}

export function Header({ query, onQueryChange, theme, onThemeChange, onOpenSidebar, user, onLogout, breadcrumbLabel, sectionLabel }) {
  const [menu, setMenu] = useState('')

  function toggleMenu(name) {
    setMenu((current) => current === name ? '' : name)
  }

  return (
    <header className="topbar">
      <button className="mobile-nav-button" aria-label="Open navigation" onClick={onOpenSidebar}>
        <span /><span /><span />
      </button>
      <div className="breadcrumb"><span>{breadcrumbLabel}</span><i>/</i><strong>{sectionLabel}</strong></div>
      <div className="topbar-tools">
        <label className="global-search">
          <SearchIcon />
          <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search questions..." aria-label="Search interview questions" />
          <kbd>⌘ K</kbd>
        </label>
        <div className="header-menu-wrap">
          <button className={`header-icon-button${menu === 'settings' ? ' header-icon-button--active' : ''}`} aria-label="Settings" aria-expanded={menu === 'settings'} onClick={() => toggleMenu('settings')}><SettingsIcon /></button>
          {menu === 'settings' && (
            <div className="popover settings-popover">
              <div className="popover-title">Appearance</div>
              <button className="setting-choice" onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}>
                <span className="setting-choice-icon">◐</span>
                <span><strong>{theme === 'light' ? 'Light theme' : 'Dark theme'}</strong><small>Switch to {theme === 'light' ? 'dark' : 'light'} mode</small></span>
                <span className={`toggle${theme === 'dark' ? ' toggle--on' : ''}`}><i /></span>
              </button>
              <p className="popover-footnote">Your preference is saved on this device.</p>
            </div>
          )}
        </div>
        <div className="header-menu-wrap">
          <button className={`profile-button${menu === 'profile' ? ' profile-button--active' : ''}`} aria-label="User profile" aria-expanded={menu === 'profile'} onClick={() => toggleMenu('profile')}>
            <span className="profile-avatar">{user?.email?.[0]?.toUpperCase() || 'U'}</span><span className="profile-name">{user?.email || 'Your account'}</span><span className="profile-caret">⌄</span>
          </button>
          {menu === 'profile' && (
            <div className="popover profile-popover">
              <div className="profile-card-row"><span className="profile-avatar profile-avatar--large">{user?.email?.[0]?.toUpperCase() || 'U'}</span><span><strong>{user?.email}</strong><small>{user?.mobile}</small></span></div>
              <div className="profile-divider" />
              <div className="profile-stat"><span>Topics in your workspace</span><strong>Ready to learn</strong></div>
              <div className="profile-divider" />
              <button className="profile-signout" onClick={() => { setMenu(''); onLogout() }}>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}