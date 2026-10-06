import { useEffect, useState } from 'react'
import PipelineSteps from '../components/PipelineSteps.jsx'
import RiskBadge from '../components/RiskBadge.jsx'
import {
  analysisResult,
  pipelineSteps,
  threatTypes,
  severityLevels,
} from '../data/mockData.js'

// Screen 2: simulated analysis.
// A timer moves through Detect -> Verify -> Connect -> Respond, then the
// predefined result from mockData.js is shown. No AI model is involved.

const STEP_DURATION_MS = 900

// Find the readable label for an id, e.g. "physical" -> "Physical Incident".
function labelFor(options, id) {
  const match = options.find((option) => option.id === id)
  return match ? match.label : id
}

function AnalysisPage({ report, onViewIncident }) {
  const [completedSteps, setCompletedSteps] = useState(0)
  const finished = completedSteps >= pipelineSteps.length

  // Advance one step at a time until all four are done.
  useEffect(() => {
    if (finished) return undefined
    const timer = setTimeout(() => {
      setCompletedSteps((count) => count + 1)
    }, STEP_DURATION_MS)
    return () => clearTimeout(timer)
  }, [completedSteps, finished])

  const result = analysisResult
  const reportText = report?.description || 'Burning smell near Block B'

  return (
    <div className="page">
      <div className="demo-label">DEMO / SIMULATED ANALYSIS</div>

      <h1 className="page__title">
        {finished ? 'Analysis Complete' : 'ANALYZING REPORT'}
      </h1>
      <p className="page__subtitle" role="status">
        {finished
          ? 'This result is a predefined demo scenario. No AI model was run.'
          : 'Simulated analysis in progress. No AI model is running.'}
      </p>

      <PipelineSteps completed={completedSteps} results={result.stepResults} />

      <section className="section">
        <h2 className="section-title">Submitted Report</h2>
        <blockquote className="quote">“{reportText}”</blockquote>
        {report && (
          <p className="meta-line">
            {labelFor(threatTypes, report.threatType)}
            {report.location ? ' · ' + report.location : ''}
            {' · '}
            {labelFor(severityLevels, report.severity)} urgency
          </p>
        )}
      </section>

      {finished && (
        <div className="result">
          <section className="section">
            <h2 className="section-title">Analysis Result</h2>
            <dl className="summary">
              <div className="summary__item summary__item--wide">
                <dt>Threat</dt>
                <dd>{result.threat}</dd>
              </div>
              <div className="summary__item">
                <dt>Risk</dt>
                <dd>
                  <RiskBadge level={result.risk} />
                </dd>
              </div>
              <div className="summary__item">
                <dt>Confidence</dt>
                <dd>{result.confidence}%</dd>
              </div>
            </dl>
          </section>

          <div className="two-column">
            <section className="section">
              <h2 className="section-title">Evidence</h2>
              <ul className="list">
                {result.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="section">
              <h2 className="section-title">Related Reports</h2>
              <ol className="list list--numbered">
                {result.relatedReports.map((item) => (
                  <li key={item}>“{item}”</li>
                ))}
              </ol>
            </section>
          </div>

          <section className="connected">
            <p className="connected__label">CONNECTED INCIDENT</p>
            <h2 className="connected__title">{result.threat}</h2>
            <p className="connected__count">
              {result.relatedReports.length} related reports detected.
            </p>

            <h3 className="connected__subtitle">Recommended Action</h3>
            <ul className="list">
              {result.recommendedActions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </section>

          <div className="form__actions">
            <button
              type="button"
              className="button button--primary"
              onClick={() => onViewIncident(result.incidentId)}
            >
              VIEW INCIDENT
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnalysisPage
