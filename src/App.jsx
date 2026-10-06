import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import ReportPage from './pages/ReportPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import IncidentDetailPage from './pages/IncidentDetailPage.jsx'

// There is no router. "page" decides which screen is shown:
//   report | analysis | incidents | dashboard | incident (detail)

function App() {
  const [page, setPage] = useState('report')
  const [report, setReport] = useState(null) // what the user typed in the form
  const [selectedIncidentId, setSelectedIncidentId] = useState(null)
  const [newIncidentId, setNewIncidentId] = useState(null) // highlighted row
  const [listPage, setListPage] = useState('dashboard') // where "Back" returns to

  // Start each screen at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  function handleSubmitReport(formValues) {
    setReport(formValues)
    setNewIncidentId(null)
    setPage('analysis')
  }

  // "VIEW INCIDENT" on the analysis screen goes to the dashboard
  // and highlights the newly identified incident.
  function handleViewIncident(incidentId) {
    setNewIncidentId(incidentId)
    setPage('dashboard')
  }

  function handleOpenIncident(incidentId) {
    setSelectedIncidentId(incidentId)
    setListPage(page === 'incidents' ? 'incidents' : 'dashboard')
    setPage('incident')
  }

  // Which nav item to highlight for the current page.
  let activeNav = page
  if (page === 'analysis') activeNav = 'report'
  if (page === 'incident') activeNav = listPage

  return (
    <>
      <Header activeNav={activeNav} onNavigate={setPage} />

      <main className="main">
        {page === 'report' && <ReportPage onSubmit={handleSubmitReport} />}

        {page === 'analysis' && (
          <AnalysisPage report={report} onViewIncident={handleViewIncident} />
        )}

        {page === 'incidents' && (
          <DashboardPage
            title="Incidents"
            showSummary={false}
            newIncidentId={newIncidentId}
            onOpenIncident={handleOpenIncident}
          />
        )}

        {page === 'dashboard' && (
          <DashboardPage
            title="Incident Dashboard"
            showSummary={true}
            newIncidentId={newIncidentId}
            onOpenIncident={handleOpenIncident}
          />
        )}

        {page === 'incident' && (
          <IncidentDetailPage
            incidentId={selectedIncidentId}
            onBack={() => setPage(listPage)}
          />
        )}
      </main>
    </>
  )
}

export default App
