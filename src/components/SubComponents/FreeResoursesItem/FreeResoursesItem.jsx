import './index.css';
import { IoIosArrowForward } from "react-icons/io";

const FreeResoursesItem=({freeResItem})=>{
    return(
        <div className="freeResoursesItem">
           <h1 className='freeResoursesItem_name'>{freeResItem.name}</h1>
           <a className='freeResoursesItem_link'>{freeResItem.LinkName} <IoIosArrowForward className='arrowIcon'/></a>
           <img src={freeResItem.imageUrl} alt={freeResItem.name} className='freeResoursesItem_image'/>
        </div>
    )
}

export default FreeResoursesItem;
