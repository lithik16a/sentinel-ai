import { pipelineSteps } from '../data/mockData.js'

// Shows DETECT -> VERIFY -> CONNECT -> RESPOND.
//
// Props:
//   completed - how many steps are finished (0 to 4). Leave out for a plain,
//               neutral list (used on the report page).
//   results   - optional text shown under each step once it is finished.
//   layout    - "row" (default) or "column".

function PipelineSteps({ completed, results, layout = 'row' }) {
  const hasProgress = typeof completed === 'number'

  return (
    <ol className={'pipeline pipeline--' + layout}>
      {pipelineSteps.map((step, index) => {
        let state = 'neutral'
        if (hasProgress) {
          if (index < completed) state = 'done'
          else if (index === completed) state = 'active'
          else state = 'pending'
        }

        return (
          <li key={step.id} className={'pipeline__step pipeline__step--' + state}>
            <span className="pipeline__label">{step.label}</span>
            <span className="pipeline__text">
              {state === 'done' && results ? results[step.id] : step.description}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

export default PipelineSteps
