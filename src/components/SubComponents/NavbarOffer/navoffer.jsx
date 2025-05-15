import './index.css'
import { BiSolidOffer } from "react-icons/bi";
import { IoSparklesSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
const NavbarOffer = () => {
   return (
        <div className="navbar_offer">
            <p className='offer'> <BiSolidOffer /> OFFER ENDS ON 15 MAY <IoSparklesSharp /></p>
            <p className='offer_text'>
                Join the NEET PowerPlus LIVE Course for 2026 @ ₹9,990  <IoIosArrowForward className='arrowIcon'/>
            </p>
        </div>
   )
}

export default NavbarOffer