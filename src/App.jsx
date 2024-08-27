import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
        {/* Chama todos os componentes filho */}
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App
