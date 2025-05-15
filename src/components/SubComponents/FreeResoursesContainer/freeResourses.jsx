import './index.css';
import FreeResoursesItem from '../FreeResoursesItem/FreeResoursesItem';
import {freeResoursesData} from '../../../WebData/webdata.json';


const FreeResourcesContainer = () => {
    return(
        <div className='freeResoursesContainer'>
            <h1 className='freeResoursesContainer_heading'>FREE Resources for Exam Preparation</h1>
            <div className='freeResoursesItems'>
                {freeResoursesData.map((item) => (
                    <FreeResoursesItem key={item.id} freeResItem={item}/>
                ))}
            {/* <FreeResoursesItem freeResItem={freeResoursesData[0]}/> */}
            </div>
        </div>
        
    )
}


export default FreeResourcesContainer;

