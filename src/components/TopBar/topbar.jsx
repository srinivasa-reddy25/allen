import './index.css'
import Navbar from '../SubComponents/Navbar/navbar';
import NavbarOffer from '../SubComponents/NavbarOffer/navoffer';

const TopBar=()=>{
    return(
        <div className='navbar_container'>
            <Navbar />
            <NavbarOffer />
        </div>  
    )
}

export default TopBar;
