import './index.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function Faqitemcomponent({ eachfaqdata, handleToggle, activeIndex }) {
    console.log(activeIndex === eachfaqdata.id)
    return (
        <div className="faq-item-container" onClick={() => {
            handleToggle(eachfaqdata.id)
        }}>
            <div className='faq-item-heading-container'>
                <h1 className='faq-item-heading'>{eachfaqdata.title}</h1>
                {(eachfaqdata.id === activeIndex) ? <IoIosArrowUp className='AllenAppArrow' /> : <IoIosArrowDown className='AllenAppArrow' />}
            </div>
            {(eachfaqdata.id === activeIndex) ? <p className='faq-item-description'>{eachfaqdata.discription}</p> : null}
        </div>
    )
}

export default Faqitemcomponent