import Logo from "./assets/logo.svg"
import Air from "./components/Air"
import Audio from "./components/Audio"
import Display from "./components/Display"
import Light from "./components/Light"
import Temp from "./components/Temp"

function App() {
  return (
    <>
      <div className="logo-block">
        <img src={Logo} alt="logo" />
      </div>
      <div className="all-cards">
        <Air />
        <Temp />
        <Audio />
        <Display />
        <Light />
      </div>
    </>
  )
}

export default App
