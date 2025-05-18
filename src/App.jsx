import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import TopBar from './components/TopBar/topbar';
import LastPart from './components/LastPart/lastpart'
import Homepage from './components/HomePage/homepage'
import NotFound from './components/NotFound/notfound'
import NeetCoursepage from './components/NeetCoursepage/coursepage'

import { class11NeetCoursePageData,class12NeetCoursePageData ,class12passNeetCoursePageData} from './WebData/webdata.json'



function App() {
  // console.log(class12passNeetCoursePageData)
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/neet/online-coaching-class-11' element={<NeetCoursepage pageclass={"11th"} courseData={class11NeetCoursePageData}/>} />
        <Route path='/neet/online-coaching-class-12' element={<NeetCoursepage pageclass={"12th"} courseData={class12NeetCoursePageData}/>} />
        <Route path='/neet/online-coaching-class-12-droppers' element={<NeetCoursepage pageclass={"12th Plus"} courseData={class12passNeetCoursePageData}/>} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <LastPart/>
    </BrowserRouter>
  )
}

export default App
