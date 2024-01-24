import { useSelector, useDispatch } from 'react-redux'
import { changeToCurrency, convert, setCurrentPairRate } from '../state/store'

const RightCurrencyPicker = () => {
  const dispatch = useDispatch()

  // For render
  const chosenCurrency = useSelector((state) => state.toCurrency)

  // Define all available currencies
  const selectedCurrenciesList = ['USD', 'EUR', 'PLN', 'GBP', 'JPY']
  // Get currently chosen currency from store

  const handleCurrencyClick = (e) => {
    e.preventDefault()
    // Get new chosen currency
    const newCurrency = e.target.innerText
    // Dispatch the action to update the chosenCurrency in the Redux store

    dispatch(changeToCurrency(newCurrency))
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

export default RightCurrencyPicker
