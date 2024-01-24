import { useDispatch, useSelector } from 'react-redux'
import { convert, setCurrentPairRateString } from '../state/store'

const CurrencyPicker = (props) => {
  const dispatch = useDispatch()

  // Get all selected currencies from converter
  const selectedCurrenciesList = useSelector(
    (state) => state.selectedCurrenciesList
  )
  // Get currently chosen currency from store (props) for rendering
  const currentCurrency = props.currentCurrency

  const handleCurrencyClick = (e) => {
    e.preventDefault()

    // Get newly chosen currency
    const newCurrency = e.target.innerText

    // Dispatch the action to update chosen currency in the Redux store
    props.action(newCurrency)

    // Change current pair rate to display under input
    dispatch(setCurrentPairRateString())

    // Finally convert after setting new currencies
    dispatch(convert())
  }

  // Render 5 selected options with exception of chosen one
  return (
    <div className="currency-picker">
      {selectedCurrenciesList.map((currency) => {
        return (
          <div
            onClick={(e) => handleCurrencyClick(e)}
            key={currency}
            className={`currency-picker-item ${
              currency === currentCurrency ? 'chosen' : ''
            }`}
          >
            {currency}
          </div>
        )
      })}
    </div>
  )
}

export default CurrencyPicker
