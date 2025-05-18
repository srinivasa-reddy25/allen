import './index.css'


import Coursesitem from '../CoursesItem/coursesitem'



function Coursescomponent({componentdata}) {
    console.log(componentdata[0].filterText)
    return (
        <div className='Container'>
            <h1>{componentdata[0].filterText}</h1>
            <hr className='CourseComponetLine'/>
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