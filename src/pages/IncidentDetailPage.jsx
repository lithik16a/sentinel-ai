import RiskBadge from '../components/RiskBadge.jsx'
import { incidents } from '../data/mockData.js'

// Detail view for one incident from the list.

function IncidentDetailPage({ incidentId, onBack }) {
  const incident = incidents.find((i) => i.id === incidentId)

  if (!incident) {
    return (
      <div className="page">
        <button type="button" className="back-link" onClick={onBack}>
          ← Back
        </button>
        <h1 className="page__title">Incident not found</h1>
      </div>
    )
  }

  return (
    <div className="page">
      <button type="button" className="back-link" onClick={onBack}>
        ← Back
      </button>

      <p className="page__eyebrow">Incident {incident.id}</p>
      <h1 className="page__title">{incident.title}</h1>

      <dl className="summary">
        <div className="summary__item">
          <dt>Risk</dt>
          <dd>
            <RiskBadge level={incident.risk} />
          </dd>
        </div>
        <div className="summary__item">
          <dt>Confidence</dt>
          <dd>{incident.confidence}%</dd>
        </div>
        <div className="summary__item">
          <dt>Location</dt>
          <dd>{incident.location}</dd>
        </div>
        <div className="summary__item">
          <dt>Related Reports</dt>
          <dd>{incident.relatedReports}</dd>
        </div>
        <div className="summary__item">
          <dt>Status</dt>
          <dd>{incident.status}</dd>
        </div>
      </dl>

      <div className="two-column">
        <section className="section">
          <h2 className="section-title">Evidence</h2>
          <ul className="list">
            {incident.evidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {incident.relatedReportTexts && (
            <>
              <h2 className="section-title section-title--spaced">
                Related Reports
              </h2>
              <ol className="list list--numbered">
                {incident.relatedReportTexts.map((text) => (
                  <li key={text}>“{text}”</li>
                ))}
              </ol>
            </>
          )}
        </section>

        <section className="section">
          <h2 className="section-title">Analysis</h2>
          <p className="body-text">“{incident.analysis}”</p>

          <h2 className="section-title section-title--spaced">
            Recommended Response
          </h2>
          <ol className="list list--numbered">
            {incident.recommendedResponse.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>

      <p className="notice">
        AI-generated recommendation — human verification required.
      </p>
    </div>
  )
}

export default IncidentDetailPage
