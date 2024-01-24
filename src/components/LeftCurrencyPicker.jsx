import { useSelector, useDispatch } from 'react-redux'
import { changeFromCurrency, convert, setCurrentPairRate } from '../state/store'

const LeftCurrencyPicker = () => {
  const dispatch = useDispatch()

  // Get currently chosen currency from store for render
  const chosenCurrency = useSelector((state) => state.fromCurrency)

  // Define all available currencies
  const selectedCurrenciesList = ['USD', 'EUR', 'PLN', 'GBP', 'JPY']

  const handleCurrencyClick = (e) => {
    e.preventDefault()
    // Get new chosen currency
    const newCurrency = e.target.innerText
    // Dispatch the action to update the chosenCurrency in the Redux store
    dispatch(changeFromCurrency(newCurrency))
    // Apply convert to hot update result
    dispatch(convert())
    // Change current pair rate to display under input
    dispatch(setCurrentPairRate())
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
              currency === chosenCurrency ? 'chosen' : ''
            }`}
          >
            {currency}
          </div>
        )
      })}
    </div>
  )
}

export default LeftCurrencyPicker
