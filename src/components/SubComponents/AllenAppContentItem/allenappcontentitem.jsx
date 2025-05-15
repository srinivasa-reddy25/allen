import './index.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const AllenAppContentItem=({eachAppAdvantage,onChangingtheElement})=>{

    const onClikingItem=()=>{
        onChangingtheElement(eachAppAdvantage.id,eachAppAdvantage.imageUrl)
        // console.log("fergfewef")
    }
    console.log(eachAppAdvantage.isActive)
    return(
        <div className='allenapp_content_item' onClick={onClikingItem}>
            <div className='allensApp_advantage_heading_container'>
                <h1 className='allenapp_advantage_heading'>{eachAppAdvantage.title}</h1>
                {/* <p>Hello world</p> */}
                {eachAppAdvantage.isActive ? <IoIosArrowUp className='AllenAppArrow' /> : <IoIosArrowDown className='AllenAppArrow'  />}
            </div>
            <p className='allenapp_advantage_discription'>
                {!eachAppAdvantage.isActive ? eachAppAdvantage.discription : ""}
            </p>
            <hr className='line' />
        </div>
    )
}
export default AllenAppContentItem;