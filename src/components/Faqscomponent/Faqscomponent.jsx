import './index.css'

import { useState } from 'react'

import { talentexfaqs } from '../../WebData/webdata.json'
import Faqitemcomponent from '../Faqitemcomponent/Faqitemcomponent'

function Faqscomponent() {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
        // console.log(index)
        // console.log(activeIndex)
    }

    return (
        <div className="faqscomponentcontainer">
            <h1 className="faqscomponentheading">Frequently asked questions</h1>
            <div className="faqscomponentquestioncontainer">
                {talentexfaqs.map((eachitem, index) => {
                    return <Faqitemcomponent eachfaqdata={eachitem} key={index} handleToggle={handleToggle} activeIndex={activeIndex} />
                })}
            </div>
        </div>
    )
}

export default Faqscomponent