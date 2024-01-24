import { useSelector } from 'react-redux'

const CurrencyInput = () => {
  const result = useSelector((state) => state.result)

  return (
    <div className="currency-input">
      <input
        type="text"
        className="currency-input-textfield"
        placeholder={result}
        readOnly
      />
    </div>
  )
}

export default CurrencyInput
