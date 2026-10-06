// Small coloured label for a risk level: CRITICAL, HIGH, MEDIUM or LOW.
// Colours are defined in global.css (.risk--critical, .risk--high, ...).

function RiskBadge({ level }) {
  return (
    <span className={'risk risk--' + level.toLowerCase()}>
      <span className="risk__dot" aria-hidden="true"></span>
      {level}
    </span>
  )
}

export default RiskBadge
