import Header from './components/Header'
import Nav from './components/Nav'
import Detail from './components/Detail'
import {Route, Routes} from 'react-router-dom'
import { useGlobalContext } from './context'

function App() {
  const {Dark} = useGlobalContext();
  return (
    <div className={`${Dark? 'dark': ''}`}>
      <Nav/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/:alpha3Code' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
