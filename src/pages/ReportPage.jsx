import { useState } from 'react'
import ChoiceGroup from '../components/ChoiceGroup.jsx'
import PipelineSteps from '../components/PipelineSteps.jsx'
import {
  threatTypes,
  severityLevels,
  evidenceOptions,
  demoReport,
} from '../data/mockData.js'

// Screen 1: the report form.
// Nothing is sent anywhere. Clicking "Analyze Report" just passes the form
// values up to App, which then opens the (simulated) analysis screen.

const emptyForm = {
  threatType: 'physical',
  description: '',
  evidenceType: 'image',
  evidenceUrl: '',
  location: '',
  severity: 'medium',
}

function ReportPage({ onSubmit }) {
  const [form, setForm] = useState(emptyForm)
  const [recording, setRecording] = useState(false) // simulated voice recording

  // Update one field of the form.
  function updateField(field, value) {
    setForm({ ...form, [field]: value })
  }

  function fillDemoReport() {
    setForm({ ...emptyForm, ...demoReport })
    setRecording(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(form)
  }

  return (
    <div className="page">
      <h1 className="page__title">Report an Incident</h1>
      <p className="page__subtitle">
        Submit information about a physical or digital threat.
      </p>

      <div className="report-layout">
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field__label" htmlFor="threatType">
              Threat Type
            </label>
            <select
              id="threatType"
              className="input"
              value={form.threatType}
              onChange={(e) => updateField('threatType', e.target.value)}
            >
              {threatTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="input input--textarea"
              rows="6"
              placeholder="Describe what happened..."
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
              required
            />
          </div>

          <div className="evidence">
            <ChoiceGroup
              name="evidenceType"
              legend="Evidence"
              options={evidenceOptions}
              value={form.evidenceType}
              onChange={(value) => updateField('evidenceType', value)}
            />

            <div className="evidence__panel">
              {form.evidenceType === 'image' && (
                <input
                  type="file"
                  accept="image/*"
                  aria-label="Upload image"
                  className="file-input"
                />
              )}

              {form.evidenceType === 'url' && (
                <input
                  type="text"
                  className="input"
                  aria-label="Evidence URL"
                  placeholder="Paste a link related to the incident"
                  value={form.evidenceUrl}
                  onChange={(e) => updateField('evidenceUrl', e.target.value)}
                />
              )}

              {form.evidenceType === 'qr' && (
                <input
                  type="file"
                  accept="image/*"
                  aria-label="Upload QR code image"
                  className="file-input"
                />
              )}

              {form.evidenceType === 'voice' && (
                <div className="voice">
                  <button
                    type="button"
                    className="button button--secondary"
                    onClick={() => setRecording(!recording)}
                  >
                    {recording ? 'Stop Recording' : 'Start Voice Report'}
                  </button>
                  <span className="voice__status" role="status">
                    {recording
                      ? 'Recording (simulated)'
                      : 'No voice report recorded'}
                  </span>
                </div>
              )}

              <p className="hint">
                Prototype note: evidence is not uploaded, scanned or recorded.
                This control only shows the intended functionality.
              </p>
            </div>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              className="input"
              placeholder="Example: Block B"
              value={form.location}
              onChange={(e) => updateField('location', e.target.value)}
            />
          </div>

          <ChoiceGroup
            name="severity"
            legend="Severity / Urgency"
            options={severityLevels}
            value={form.severity}
            onChange={(value) => updateField('severity', value)}
          />

          <div className="form__actions">
            <button type="submit" className="button button--primary">
              ANALYZE REPORT
            </button>
            <button
              type="button"
              className="button button--link"
              onClick={fillDemoReport}
            >
              Fill demo report
            </button>
          </div>
        </form>

        <aside className="report-aside">
          <h2 className="section-title">How a report is handled</h2>
          <PipelineSteps layout="column" />
          <p className="hint">
            Each report is treated as part of a larger picture, not as an
            isolated complaint.
          </p>
        </aside>
      </div>
    </div>
  )
}

export default ReportPage
