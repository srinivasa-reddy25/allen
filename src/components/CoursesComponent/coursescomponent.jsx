import './index.css'


import Coursesitem from '../CoursesItem/coursesitem'



function Coursescomponent({componentdata}) {
    return (
        <div className='Container'>
            <h1>{componentdata[0].filtertype}</h1>
            <div className='courseList'>
                {componentdata.map((course, index) => {
                    return (
                        <Coursesitem key={index} CourseData={course} />
                    )
                }
                )}
            </div>

        </div>
    )
}

export default Coursescomponent