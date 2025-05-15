import './index.css';
import CourseContainer from '../CourseContainer/CourseContainer';
import {courses} from '../../../WebData/webdata.json';

const OnlineCourses = () => {
    return(
        <div className="onlinecourses_container">
            <div className='onlinecourses'>
                <h1>
                    Discover the perfect online course
                </h1>
                <div className='courses_containers'>
                    {courses.map((course) => (
                        <CourseContainer key={course.id} course={course}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OnlineCourses;