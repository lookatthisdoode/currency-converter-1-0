import { useSelector, useDispatch } from 'react-redux'
import { changeFromCurrency } from '../state/store'
import CurrencyInput from './CurrencyInput'
import CurrencyPicker from './CurrencyPicker'

const LeftSide = () => {
  const dispatch = useDispatch()

  // Define action to pass into picker (make picker reusable)
  const action = (payload) => dispatch(changeFromCurrency(payload))
  const currentCurrency = useSelector((state) => state.fromCurrency)

  return (
    <div className="side-wrapper overpass">
      <h3>I have</h3>
      <CurrencyPicker action={action} currentCurrency={currentCurrency} />
      <CurrencyInput />
    </div>
  )
}

export default LeftSide
