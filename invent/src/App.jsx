import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute'
import MainHome from './pages/firstPage/MainHome'
import PartnerRoute from './routes/PartnerRoute'
import { ToastContainer } from 'react-toastify'
import Try from './components/common/Try'


function App() {


  return (
    <div>
      <Router>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<MainHome/>}/>
          <Route path='/entrepreneur/*' element={<UserRoute/>}/>
          <Route path='/investor/*' element={<PartnerRoute/>}></Route>
          <Route path='/admin/*' element={<AdminRoute/>}/>
          <Route path='/try' element={<Try/>}/>
          <Route path='*' element={<div className='text-white'>Page not found</div>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
