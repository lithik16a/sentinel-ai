// Top navigation bar shown on every screen.

const navItems = [
  { id: 'report', label: 'Report Incident' },
  { id: 'incidents', label: 'Incidents' },
  { id: 'dashboard', label: 'Dashboard' },
]

// "activeNav" is the id of the nav item to highlight.
function Header({ activeNav, onNavigate }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__brand"
          onClick={() => onNavigate('report')}
        >
          SENTINEL AI
        </button>

        <nav aria-label="Main navigation">
          <ul className="site-header__nav">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={
                    'site-header__link' +
                    (activeNav === item.id ? ' site-header__link--active' : '')
                  }
                  aria-current={activeNav === item.id ? 'page' : undefined}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
