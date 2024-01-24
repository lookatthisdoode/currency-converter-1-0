import { useDispatch } from 'react-redux'
import arrows from '../assets/arrows.svg'
import { switchPair, convert, setCurrentPairRateString } from '../state/store'

const Switch = () => {
  const dispatch = useDispatch()
  const handleSwitch = () => {
    dispatch(switchPair())
    dispatch(setCurrentPairRateString())
    dispatch(convert())
  }

  return (
    <div className="switch" onClick={() => handleSwitch()}>
      <img src={arrows} alt="image arrows" width={60} />
    </div>
  )
}

export default Switch
