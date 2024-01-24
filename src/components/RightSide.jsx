import { useDispatch, useSelector } from 'react-redux'
import CurrencyOutput from './CurrencyOutput'
import CurrencyPicker from './CurrencyPicker'
import { changeToCurrency } from '../state/store'

const RightSide = () => {
  const dispatch = useDispatch()

  // Define action to pass into picker (make picker reusable)
  const currentCurrency = useSelector((state) => state.toCurrency)
  const action = (payload) => dispatch(changeToCurrency(payload))

  return (
    <div className="side-wrapper overpass">
      <h3>I will recieve</h3>
      <CurrencyPicker action={action} currentCurrency={currentCurrency} />
      <CurrencyOutput />
    </div>
  )
}

export default RightSide
