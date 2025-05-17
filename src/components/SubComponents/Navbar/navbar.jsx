import './index.css';
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar_right">
                <Link to="/" className='logo'>
                     <img className='logo_image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ALLEN_Career_Institute_logo.svg/1254px-ALLEN_Career_Institute_logo.svg.png?20230622120943" alt="logo" />
                </Link>
                <ul className='nav_links'>
                    <li >
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        Test Series
                    </li>
                    <li>
                        Results
                    </li>
                    <li>
                        Study Materials
                    </li>
                    <li>
                        Books 
                    </li>
                    <li>
                        More
                    </li>
                </ul>
            </div>  
            <div className='navbar_left'>
                <div className='phone_call'>
                    <FaPhone />
                </div>
                <button className='login_btn'>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Navbar;
