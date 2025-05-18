import './index.css'

import { RiLiveLine } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import { BsCollectionPlay } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";

const IconsData = {
    LIVE: <RiLiveLine />,
    ONLINETESTSERIES: <LuNotebookPen />,
    RECORDED: <BsCollectionPlay />,
    PRACTICE: <TfiWrite />
}



function Coursesitem({ CourseData }) {

    return (
        <div className='courseitemcontainer'>
            <div className='coursetopContainer'>
                <div className='sessiontypeContainer'>
                    {IconsData[CourseData.filtertype]}
                    {CourseData.filterText}
                </div>
                {CourseData.tag && <div className='tagContainer'>
                    <p>{CourseData.tag}</p>
                </div>}
            </div>

            <div className='courseheadingContainer'>
                <p className='coursetitle'>{CourseData.title}</p>
                <p className='coursebatchType'>{CourseData.batchType}</p>
            </div>

            <ul className='coursefeatureslist'>
                {
                    CourseData.features.map((feature, index) => {
                        return (
                            <li key={index} className='coursefeatureitem'>
                                {feature}
                            </li>
                        )
                    })
                }
            </ul>
            <div className='feeandlinkContainer'>
                <div className='coursepriceContainer'>
                    <p className='courseprice'>{CourseData.currency} {CourseData.price} </p>
                    <p className='taxestext'>{CourseData.taxApplicable ? '+Taxes applicable' : null}</p>
                </div>
                <a href="#" className='knowmorelink'>{CourseData.ctaText} <IoIosArrowForward /></a>
            </div>
        </div>
    )
}

export default Coursesitem