import RiskBadge from '../components/RiskBadge.jsx'
import { incidents } from '../data/mockData.js'

// Screen 3: incident list.
// Used for both "Incidents" (table only) and "Dashboard" (summary + table).
//
// Props:
//   title       - page heading
//   showSummary - show the count summary above the table
//   newIncidentId - id of an incident to mark as newly identified
//   onOpenIncident(id) - called when a row is clicked

function DashboardPage({ title, showSummary, newIncidentId, onOpenIncident }) {
  const criticalCount = incidents.filter((i) => i.risk === 'CRITICAL').length
  const highCount = incidents.filter((i) => i.risk === 'HIGH').length
  const openCount = incidents.filter((i) => i.status !== 'Contained').length

  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <p className="page__subtitle">
        Connected incidents, ranked by risk. Demo data for illustration only.
      </p>

      {showSummary && (
        <dl className="summary summary--counts">
          <div className="summary__item">
            <dt>Incidents</dt>
            <dd>{incidents.length}</dd>
          </div>
          <div className="summary__item">
            <dt>Critical</dt>
            <dd>{criticalCount}</dd>
          </div>
          <div className="summary__item">
            <dt>High</dt>
            <dd>{highCount}</dd>
          </div>
          <div className="summary__item">
            <dt>Not yet contained</dt>
            <dd>{openCount}</dd>
          </div>
        </dl>
      )}

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Incident</th>
              <th scope="col">Location</th>
              <th scope="col">Category</th>
              <th scope="col">Risk</th>
              <th scope="col" className="table__number">
                Related Reports
              </th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr
                key={incident.id}
                className={
                  'table__row' +
                  (incident.id === newIncidentId ? ' table__row--new' : '')
                }
                onClick={() => onOpenIncident(incident.id)}
              >
                <td>{incident.id}</td>
                <td>
                  <button
                    type="button"
                    className="table__link"
                    onClick={(e) => {
                      e.stopPropagation() // avoid firing the row click as well
                      onOpenIncident(incident.id)
                    }}
                  >
                    {incident.title}
                  </button>
                  {incident.id === newIncidentId && (
                    <span className="new-tag">Newly identified</span>
                  )}
                </td>
                <td>{incident.location}</td>
                <td>{incident.category}</td>
                <td>
                  <RiskBadge level={incident.risk} />
                </td>
                <td className="table__number">{incident.relatedReports}</td>
                <td>{incident.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardPage
