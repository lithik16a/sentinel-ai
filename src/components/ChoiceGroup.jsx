// A row of options where only one can be selected (built on radio buttons,
// so it works with the keyboard and screen readers).
//
// options: [{ id, label }]

function ChoiceGroup({ name, legend, options, value, onChange }) {
  return (
    <fieldset className="field">
      <legend className="field__label">{legend}</legend>
      <div className="choice-group">
        {options.map((option) => (
          <label key={option.id} className="choice">
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default ChoiceGroup
