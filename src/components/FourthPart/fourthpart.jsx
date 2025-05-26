import './index.css'
import AllenAppAdvantage from '../SubComponents/AllenAppAdvantages/allenappAdvantage'
import Testimonials from '../SubComponents/Testimonials/testimonials'
import {TestimonialsData} from '../../WebData/webdata.json'
import {AllenAppAdvantageData} from '../../WebData/webdata.json';


const FourthPart=()=>{
    return(
        <div>
            <AllenAppAdvantage AllenAppAdvantageData={AllenAppAdvantageData} namecomponent={'ALLEN App Advantage'}/>
            <Testimonials TestimonialsData={TestimonialsData}/>
        </div>
    )
}
export default FourthPart;