import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './components/HomePage/homepage'
import NotFound from './components/NotFound/notfound'
import NeetCoursepage from './components/NeetCoursepage/coursepage'
import TalentTex from './components/TalentTex/TalentTex'
import LoginPage from './components/LoginPage/LoginPage'
import Layout from './Layout/layout'
import Verifypage from './components/LoginPage/Verifypage'

import { class11NeetCoursePageData, class12NeetCoursePageData, class12passNeetCoursePageData } from './WebData/webdata.json'

import BuildContext from './BuildContext'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {


  const [inputnumber, setinputnumber] = useState('');

  const [OTP, SETOTP] = useState('');

  const getRandomNumber = () => {
    const numnber1 = String(Math.floor(Math.random() * 10));
    const numnber2 = String(Math.floor(Math.random() * 10));
    const numnber3 = String(Math.floor(Math.random() * 10));
    const numnber4 = String(Math.floor(Math.random() * 10));
    return numnber1 + numnber2 + numnber3 + numnber4;
  }
  const generateOtp=()=>{
    const otp = getRandomNumber();
    SETOTP(otp);
    return OTP;
  }








  return (
    <BuildContext.Provider value={{
      inputnumber, setinputnumber,
      OTP, SETOTP,
      generateOtp
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='/neet/online-coaching-class-11' element={<NeetCoursepage pageclass={"11th"} courseData={class11NeetCoursePageData} />} />
            <Route path='/neet/online-coaching-class-12' element={<NeetCoursepage pageclass={"12th"} courseData={class12NeetCoursePageData} />} />
            <Route path='/neet/online-coaching-class-12-droppers' element={<NeetCoursepage pageclass={"12th Plus"} courseData={class12passNeetCoursePageData} />} />
            <Route path='/tallentex' element={<TalentTex />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/verifyotp' element={<Verifypage />}></Route>
        </Routes>
      </BrowserRouter>
    </BuildContext.Provider>



  )
}



export default App
