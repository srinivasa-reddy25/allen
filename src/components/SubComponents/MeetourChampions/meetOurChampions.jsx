import './index.css';
import { IoIosArrowForward } from "react-icons/io";

const MeetOurChampions = () => {
    return(
        <div className="meet_our_champions_container">
            <h1 className='meet_our_champions_heading'>Meet our Champions</h1>
            <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731570115/desktop_b1jw5i.webp" alt="" />
            <div className="meet_our_champions_buttons">
                <a>
                    <p>
                        View JEE Main 2025 Results  
                    </p>
                     <IoIosArrowForward className='arrowIcon'/>
                </a>
                <a>
                    <p>
                        View JEE Main 2025 Results  
                    </p>
                     <IoIosArrowForward className='arrowIcon'/>
                </a>
            </div>
        </div>
    )
}
export default MeetOurChampions;
