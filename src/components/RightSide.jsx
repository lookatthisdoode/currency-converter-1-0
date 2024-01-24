import CurrencyOutput from './CurrencyOutput'
import RightCurrencyPicker from './RightCurrencyPicker'

const RightSide = () => {
  return (
    <div className="side-wrapper overpass">
      <h3 className="">I will recieve</h3>
      <RightCurrencyPicker />
      <CurrencyOutput />
    </div>
  )
}

export default RightSide
