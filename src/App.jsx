import { Navbar } from './components/Navbar'
import { MainRouter } from './router/MainRouter'
import { Footer } from './components/Footer'
import "./App.css"

function App() {

const miProp = "menu"
  return (
    <>

<Navbar primerapropiedad = {miProp}/>
<div className='background'>
<MainRouter/>
</div>

<Footer/>







    </>
  )
}

export default App
