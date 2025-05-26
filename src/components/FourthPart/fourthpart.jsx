import './index.css'
import AllenAppAdvantage from '../SubComponents/AllenAppAdvantages/allenappAdvantage'
import Testimonials from '../SubComponents/Testimonials/testimonials'

import {AllenAppAdvantageData} from '../../WebData/webdata.json';


const FourthPart=()=>{
    return(
        <div>
            <AllenAppAdvantage AllenAppAdvantageData={AllenAppAdvantageData} namecomponent={'ALLEN App Advantage'}/>
            <Testimonials/>
        </div>
    )
}
export default FourthPart;