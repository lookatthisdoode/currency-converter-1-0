import { useDispatch } from 'react-redux'
import arrows from '../assets/arrows.svg'
import { switchPair, convert, setCurrentPairRate } from '../state/store'

const Switch = () => {
  const dispatch = useDispatch()
  const handleSwitch = () => {
    dispatch(switchPair())
    dispatch(setCurrentPairRate())
    dispatch(convert())
  }

  return (
    <div className="switch" onClick={() => handleSwitch()}>
      <img src={arrows} alt="image arrows" width={60} />
    </div>
  )
}

export default Switch
