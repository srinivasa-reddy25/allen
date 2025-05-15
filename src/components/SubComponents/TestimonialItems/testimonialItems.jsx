import './index.css';

const TestimonialsItem=({testimonialData})=>{
     
    return (
        <div className='TestimonialsItemContainer'>
            <img src="https://allen.in/quotes.svg" alt="" className='testimonialDeco'/>
            <p className='studentDescription'>
                {testimonialData.studentDescription}
            </p>
            <div className='studentDetails_container'>
                <img src={testimonialData.studentImage} alt="" className='studentImage' />
                <div className='studentDetails_description'>
                    <h2 className='studentName'>{testimonialData.studentName}</h2>
                    <p className='StudentCourse'>{testimonialData.StudentCourse}</p>
                    <p className='studentMarks'>{testimonialData.studentMarks}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsItem;