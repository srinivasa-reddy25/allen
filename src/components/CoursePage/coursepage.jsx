import './index.css'

import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RiLiveLine } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { BsCollectionPlay } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

import Coursescomponent from '../CoursesComponent/coursescomponent'

import { CoursesData } from '../../WebData/webdata.json'

const LIVE = CoursesData.filter((course) => course.filtertype === "LIVE")
const Recorded = CoursesData.filter((course) => course.filtertype === "RECORDED")
const Practice = CoursesData.filter((course) => course.filtertype === "PRACTICE")
const Onlinetestseries = CoursesData.filter((course) => course.filtertype === "ONLINE TEST SERIES" || course.filtertype === "OFFLINE TEST SERIES")


import Add from '../SubComponents/Add/add'



function Coursepage() {
    // console.log(Recorded)

    const [isLiveActive, setIsLiveActive] = useState(false);
    const [isRecordedActive, setIsRecordedActive] = useState(false);
    const [isPracticeActive, setIsPracticeActive] = useState(false);
    const [isOnlineTestActive, setIsOnlineTestActive] = useState(false);
    const [selectedYear, setSelectedYear] = useState("");

    const [displayData, setDisplayData] = useState([LIVE, Recorded, Practice, Onlinetestseries]);


    const onclikinglivefilter = () => {
        setIsLiveActive((prev) => !prev);
        console.log(isLiveActive);

    }
    const onclikingrecordedfilter = () => {
        setIsRecordedActive((prev) => !prev);

    }
    const onclikingpracticefilter = () => {
        setIsPracticeActive((prev) => !prev);

    }
    const onclikingtestfilter = () => {
        setIsOnlineTestActive((prev) => !prev);

    }
    useEffect(() => {

        const FilteringThedata = () => {
            if (!(isLiveActive || isRecordedActive || isPracticeActive || isOnlineTestActive)) {
                setDisplayData([LIVE, Recorded, Practice, Onlinetestseries]);
            }
            else {
                const filteredData = [];
                if (isLiveActive) {
                    filteredData.push(LIVE);
                }
                if (isRecordedActive) {
                    filteredData.push(Recorded);
                }
                if (isPracticeActive) {
                    filteredData.push(Practice);
                }
                if (isOnlineTestActive) {
                    filteredData.push(Onlinetestseries);
                }
                setDisplayData(filteredData);
                console.log(filteredData);
            }
        }
        FilteringThedata();

    }, [isLiveActive, isRecordedActive, isPracticeActive, isOnlineTestActive])


    const style1 = {
        backgroundColor: "#d6e8ff",
        borderColor: "#0366d9"
    }

    return (
        <div className='CoursesPageContainer'>
            {/* <hr /> */}
            <div className='CoursesPage'>
                <h1 className='Coursepagemainheading'>NEET courses for Class 11th</h1>
                <div className='filtersbtnContainer'>
                    <select className='yearSelectionDropdown'>
                        <option value="">Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>
                    {isLiveActive ?
                        <button className='livefilterbtn' onClick={onclikinglivefilter} style={style1}> <RiLiveLine /> Live  <RxCross2 /></button>
                        :
                        <button className='livefilterbtn' onClick={onclikinglivefilter}> <RiLiveLine /> Live  </button>
                    }
                    {isOnlineTestActive ?
                        <button className='onlinetestfilterbtn' onClick={onclikingtestfilter} style={style1}><LuNotebookPen /> Online test series  <RxCross2 /></button>
                        :
                        <button className='onlinetestfilterbtn' onClick={onclikingtestfilter}><LuNotebookPen /> Online test series</button>
                    }
                    {isRecordedActive ?
                        <button className='reacorderfilterbtn' onClick={onclikingrecordedfilter} style={style1}><BsCollectionPlay /> Recorded  <RxCross2 /></button>
                        :
                        <button className='reacorderfilterbtn' onClick={onclikingrecordedfilter}><BsCollectionPlay /> Recorded</button>
                    }
                    {isPracticeActive ?
                        <button className='parcticefilterbtn' onClick={onclikingpracticefilter} style={style1}> <TfiWrite /> Practice  <RxCross2 /></button>
                        :
                        <button className='parcticefilterbtn' onClick={onclikingpracticefilter}> <TfiWrite /> Practice</button>
                    }

                </div>
                {
                    displayData.map((course, index) => (
                        <Coursescomponent key={index} componentdata={course} />
                    ))
                }

            </div>
            <Add url="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1744021326/fvhneghjwyn9drp37bh9.png?_upload_ref=ic_img_tool&__ar__=4.03" />
        </div>
    )
}

export default Coursepage