import './index.css';
import { IoIosArrowForward } from "react-icons/io";

const CourseContainer=({course})=>{

    return(
        <div className="course_container">
            <div className='course_name'>
                <h1>{course.name}</h1>
                <a className='viewbutton'>View <IoIosArrowForward className='arrowIcon'/></a>
            </div>
            <div className='course_image_container'>
                <img src={course.imageUrl} alt={course.name} />
            </div>
        </div>
    )
}

export default CourseContainer;