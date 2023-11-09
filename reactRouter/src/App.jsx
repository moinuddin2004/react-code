import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
      {/* <h1 className='bg-green-700 '>hi moin</h1> */}
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
