import './index.css';
import CarouselWithIndicatorsExample from '../SubComponents/Caurosal/caurosal';
import{slides} from '../../ImageData/images.json'
import Add from '../SubComponents/Add/add';

const mesurse = {
    width:'400px',
    height:'225px'
}

const ScholarShip = () => {
    return (
        <div className="scholarship_container">
            <div className="scholarship">
                <div className="scholarship_text">
                    <p>
                        Get up to 100% scholarship on ALLEN courses.
                    </p>
                    <div className="scholarship_text2">
                        <p>
                            Register for Scholarship
                        </p>
                        <div className="scholarship_buttons">
                            <button>
                                Online Courses
                            </button>
                            <button>
                                Offline Courses
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Sholarship_carousel">
                    <CarouselWithIndicatorsExample data={slides} mesurse={mesurse}/>
                    {/* <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1745222201/algooaqu0aioqkysfkd5.png?_upload_ref=ic_img_tool&__ar__=1.78" alt="" /> */}
                </div>
            </div>
        </div>


    )

}

export default ScholarShip;