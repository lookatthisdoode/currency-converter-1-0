import { useSelector } from 'react-redux'

const CurrencyOutput = () => {
  const result = useSelector((state) => state.result)

  return (
    <div className="currency-display">
      <input
        type="text"
        className="currency-display-textfield"
        placeholder={result}
        readOnly
      />
    </div>
  )
}

export default CurrencyOutput
