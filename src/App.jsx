import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import Switch from './components/Switch'
import { useSelector } from 'react-redux'

function App() {
  const lastUpdated = useSelector((state) => state.lastUpdated)

  return (
    <section className="main-wrapper">
      <h1 className="overpass"> Currency converter 1.0</h1>
      <div className="content-wrapper">
        <div className="content-wrapper-content">
          <LeftSide />
          <Switch />
          <RightSide />
        </div>
        <div className="content-wrapper-footer josefin-sans">
          <div className="content-wrapper-footer-info">
            Last Updated {lastUpdated.toString()}
          </div>
          <div className="content-wrapper-footer-info">
            API:
            <a href="https://www.kurzy.cz/html-kody/json/kurzy-bank.htm">
              Kurzy.cz
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
