import CurrencyInput from './CurrencyInput'
import LeftCurrencyPicker from './LeftCurrencyPicker'

const LeftSide = () => {
  return (
    <div className="side-wrapper overpass">
      <h3>I have</h3>
      <LeftCurrencyPicker />
      <CurrencyInput />
    </div>
  )
}

export default LeftSide
