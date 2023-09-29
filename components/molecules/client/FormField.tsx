import PropTypes from 'prop-types'

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {String} props.label
 * @param {String} [props.labelFor]
 * @param {String} [props.errorMessage]
 * @param {Object} [props.styleModifier]
 * @param {String} [props.styleModifier.container]
 * @param {String} [props.styleModifier.label]
 * @param {String} [props.styleModifier.controlContainer]
 *
 * @returns {JSX.Element}
 */
const FormField = ({
  children,
  label,
  labelFor,
  errorMessage,
  styleModifier,
}: {
  children: React.ReactNode
  label: string
  labelFor?: string
  errorMessage?: string
  styleModifier?: { container?: string; label?: string; controlContainer?: string }
}): JSX.Element => {
  return (
    <div
      className={`h-auto px-px justify-start items-center flex flex-row gap-4 ${
        styleModifier && styleModifier.container ? ` ${styleModifier.container}` : ''
      }`}>
      <label
        htmlFor={labelFor}
        className={`text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight ${
          styleModifier?.label ? ` ${styleModifier.label}` : ''
        }`}>
        {label}
      </label>

      <div
        className={`flex flex-row gap-8 item-center justify-center ${
          styleModifier?.controlContainer ? ` ${styleModifier.controlContainer}` : ''
        }`}>
        {children}
      </div>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string,
  errorMessage: PropTypes.string,
  styleModifier: PropTypes.shape({
    container: PropTypes.string,
    label: PropTypes.string,
    controlContainer: PropTypes.string,
  }),
}

export { FormField }
