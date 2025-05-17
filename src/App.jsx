import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import TopBar from './components/TopBar/topbar';
import LastPart from './components/LastPart/lastpart'
import Homepage from './components/HomePage/homepage'
import NotFound from './components/NotFound/notfound'
import Coursepage from './components/CoursePage/coursepage'


function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/neet/online-coaching-class-11' element={<Coursepage />} />
        
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <LastPart/>
    </BrowserRouter>
  )
}

export default App
