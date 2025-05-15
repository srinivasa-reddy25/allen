import './index.css'
import TestimonialsItem from '../TestimonialItems/testimonialItems';
import {TestimonialsData} from '../../../WebData/webdata.json'



const Testimonials = () => {
    return (
        <div className='TestimonialsMainContainer'>
            <div className=' testimonials'>
                <h1 className='testimonialsHeading'>Testimonials from our students</h1>
                <div className='TestimonialsConatiner'>
                    {TestimonialsData.map((item)=>
                        <TestimonialsItem key={item.id} testimonialData={item}/>
                    )}
                    {/* <TestimonialsItem testimonialData={TestimonialsData[0]}/> */}
                </div>
            </div>
        </div>
    )
}


export default Testimonials