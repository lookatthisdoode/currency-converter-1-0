import { useSelector, useDispatch } from 'react-redux'
import { convert, changeInput } from '../state/store'

const CurrencyInput = () => {
  const { fromCurrency, toCurrency, currentPairRate } = useSelector(
    (state) => state
  )

  const dispatch = useDispatch()

  const handleConvert = (e) => {
    e.preventDefault()

    // Get the input value and remove non-numeric characters
    const input = e.target.value.replace(/[^0-9.]/g, '')
    // Also replace value itself as if characters are not allowed
    e.target.value = input

    // Convert the cleaned input to an integer
    const numericInput = parseFloat(input)

    // Dispatch the action to update the input in the Redux store
    dispatch(changeInput(numericInput))

    // Proceed with the conversion
    dispatch(convert())
  }

  return (
    <div className="currency-input">
      <input
        type="text"
        className="currency-input-textfield"
        placeholder="0.00"
        onChange={(e) => handleConvert(e)}
      />
      <div className="currency-input-rate josefin-sans">
        {currentPairRate &&
          `1 ${fromCurrency} = ${1 * currentPairRate} ${toCurrency}`}
      </div>
    </div>
  )
}

export default CurrencyInput
