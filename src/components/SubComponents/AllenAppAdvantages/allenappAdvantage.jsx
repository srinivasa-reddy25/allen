import './index.css';
import AllenAppContentItem from '../AllenAppContentItem/allenappcontentitem';
import { useState } from 'react';

import {AllenAppAdvantageData} from '../../../WebData/webdata.json';

const AllenAppAdvantage = () => {
    
    const [activeUrl, setActiveUrl] = useState(AllenAppAdvantageData[0].imageUrl);

    const [currentData,setCurrentData] = useState(AllenAppAdvantageData);

    const onChangingtheElement = (id,imageUrl) => {
        const filteredData=currentData.map((eachItem)=>{
            if(eachItem.id===id){
                return {...eachItem,isActive:false}
            }
            return {...eachItem,isActive:true}
            // console.log(eachItem.isActive)
        })
        setCurrentData(filteredData);
        setActiveUrl(imageUrl);
    }

    return(
        <div className='allenapp_advantage_container'>
            <div className='allenapp_advantage_content'>
                <h1 className='allenapp_advantage_main_heading'>ALLEN App Advantage</h1>
                <div className='main_content'>
                    <div className='right_content'>
                        {/* <AllenAppContentItem eachAppAdvantage={data[0]}/> */}
                        {currentData.map((eachAppAdvantage)=>(
                            <AllenAppContentItem eachAppAdvantage={eachAppAdvantage} key={eachAppAdvantage.id} onChangingtheElement={onChangingtheElement}/>
                        ))}
                    </div>
                    <div className='left_content'>
                        <img src={activeUrl} alt="" className='left_content_image' />
                    </div>
                </div>
                <button className='allenapp_advantage_buton'>Explore More</button>
            </div>
        </div>
    )
}

export default AllenAppAdvantage;