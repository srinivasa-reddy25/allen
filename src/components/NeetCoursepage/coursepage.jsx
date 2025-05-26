import './index.css'

import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RiLiveLine } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { BsCollectionPlay } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";

import Coursescomponent from '../CoursesComponent/coursescomponent'

import Add from '../SubComponents/Add/add'


function NeetCoursepage({ pageclass, courseData, activeFilters }) {
    console.log("helwofjakefbeajfbaj",activeFilters)

    // console.log("live activaaa",activeFilters["isRecordedActive"]);

    const [isLiveActive, setIsLiveActive] = useState(false );
    const [isRecordedActive, setIsRecordedActive] = useState(false);
    const [isPracticeActive, setIsPracticeActive] = useState(false);
    const [isOnlineTestActive, setIsOnlineTestActive] = useState(false);
    const [displayData, setDisplayData] = useState([]);

    const { categories } = courseData[0]


    const LIVE = courseData.filter((course) => course.filtertype === "LIVE")
    const Recorded = courseData.filter((course) => course.filtertype === "RECORDED")
    const Practice = courseData.filter((course) => course.filtertype === "PRACTICE")
    const Onlinetestseries = courseData.filter((course) => course.filtertype === "ONLINETESTSERIES")


    const onclikinglivefilter = () => {
        setIsLiveActive((prev) => !prev);

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
        console.log("useEffect is running");
        setIsLiveActive(activeFilters.isLiveActive);
        setIsRecordedActive(activeFilters.isRecordedActive);
        setIsPracticeActive(activeFilters.isPracticeActive);
        setIsOnlineTestActive(activeFilters.isOnlineTestActive);

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
                // console.log(filteredData);
            }
        }
        FilteringThedata();

    }, [isLiveActive, isRecordedActive, isPracticeActive, isOnlineTestActive, courseData])

    const style1 = {
        backgroundColor: "#d6e8ff",
        borderColor: "#0366d9"
    }

    return (
        <div className='CoursesPageContainer'>
            <div className='CoursesPage'>
                <h1 className='Coursepagemainheading'>NEET courses for Class {pageclass}</h1>
                <div className='filtersbtnContainer'>
                    <select className='yearSelectionDropdown'>
                        <option value="">Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>
                    <button className='livefilterbtn' onClick={onclikinglivefilter} style={isLiveActive ? style1 : null}> <RiLiveLine /> {isLiveActive ? <>Live <RxCross2 /></> : 'Live'}</button>
                    <button className='onlinetestfilterbtn' onClick={onclikingtestfilter} style={isOnlineTestActive ? style1 : null}><LuNotebookPen />  {isOnlineTestActive ? <>Online test series <RxCross2 /></> : "Online test series"}</button>
                    <button className='reacorderfilterbtn' onClick={onclikingrecordedfilter} style={isRecordedActive ? style1 : null}><BsCollectionPlay />{isRecordedActive ? <>Recorded <RxCross2 /></> : "Recorded"}</button>
                    <button className='parcticefilterbtn' onClick={onclikingpracticefilter} style={isPracticeActive ? style1 : null}> <TfiWrite />  {isPracticeActive ? <>Practice <RxCross2 /></> : "Practice"}</button>
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

export default NeetCoursepage