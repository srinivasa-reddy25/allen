import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './components/HomePage/homepage'
import NotFound from './components/NotFound/notfound'
import NeetCoursepage from './components/NeetCoursepage/coursepage'
import TalentTex from './components/TalentTex/TalentTex'
import LoginPage from './components/LoginPage/LoginPage'
import Layout from './Layout/layout'
import Verifypage from './components/LoginPage/Verifypage'
import ResultsPage from './components/ResultsPage/ResultsPage'
import RequestCallback from './components/RequestCallback/RequestCallback'

import { class11NeetCoursePageData, class12NeetCoursePageData, class12passNeetCoursePageData } from './WebData/webdata.json'

import BuildContext from './BuildContext'

import { useState } from 'react';

const images2024 = [
  "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1729234064/Combined-NEET-page_9th-Oct_NEW_-1_jyqrna.webp",
  "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1729234064/Combined-NEET-page_9th-Oct_NEW_-2_msev7c.webp",
  "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1729234064/Combined-NEET-page_9th-Oct_NEW_-3_qfpkal.webp",
  "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1729234065/Combined-NEET-page_9th-Oct_NEW_-4_j3fk7j.webp",
]
const images2023 = [
  "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1730118158/p0ukov551whiqsguxl4d.png?_upload_ref=ic_img_tool",
  "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1730118255/bxmvtfdvppswwyckwxsg.png?_upload_ref=ic_img_tool",
  "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1730118278/xfbaudbtfoqvolkckisj.png?_upload_ref=ic_img_tool"
]
const images2022 = [
  "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1730124439/SEOContent/RESULTS/NEET/ACI_NEET_UG_Result_2022_mgmgwa.png"
]



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
  const generateOtp = () => {
    const otp = getRandomNumber();
    SETOTP(otp);
    return OTP;
  }

  const activeFilters = {
    isLiveActive: false,
    isRecordedActive: true,
    isPracticeActive: true,
    isOnlineTestActive: true
  }
  const activefiltersfornormalpage = {
    isLiveActive: false,
    isRecordedActive: false,
    isPracticeActive: false,
    isOnlineTestActive: false
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
            <Route path='/neet/online-coaching-class-11' element={<NeetCoursepage pageclass={"11th"} courseData={class11NeetCoursePageData} activeFilters={activefiltersfornormalpage} />} />
            <Route path='/neet/online-coaching-class-12' element={<NeetCoursepage pageclass={"12th"} courseData={class12NeetCoursePageData} activeFilters={activefiltersfornormalpage} />} />
            <Route path='/neet/online-coaching-class-12-droppers' element={<NeetCoursepage pageclass={"12th Plus"} courseData={class12passNeetCoursePageData} activeFilters={activefiltersfornormalpage} />} />
            <Route path='/neet/online-coaching-class-11/Program_Mode=online_test_series+recorded+practice' element={<NeetCoursepage pageclass={"11th"} courseData={class11NeetCoursePageData} activeFilters={activeFilters} />} />
            <Route path='/neet/online-coaching-class-12/Program_Mode=online_test_series+recorded+practice' element={<NeetCoursepage pageclass={"12th"} courseData={class12NeetCoursePageData} activeFilters={activeFilters} />} />
            <Route path='/neet/online-coaching-class-12-droppers/Program_Mode=online_test_series+recorded+practice' element={<NeetCoursepage pageclass={"12th Plus"} courseData={class12passNeetCoursePageData} activeFilters={activeFilters} />} />
            <Route path="neet/results-2024" element={<ResultsPage imagesList={images2024} />} />
            <Route path="neet/results-2023" element={<ResultsPage imagesList={images2023} />} />
            <Route path="neet/results-2022" element={<ResultsPage imagesList={images2022} />} />
            <Route path='/schedule-a-call-back' element={<RequestCallback />} />
            
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
