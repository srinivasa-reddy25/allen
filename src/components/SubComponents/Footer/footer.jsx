import {FooterData} from '../../../WebData/webdata.json'
import FooterItem from '../FooterItem/footerItem'
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

import './index.css'

const Footer=()=>{
    return(
        <div className="Footer_Container">
            <div className="footerContent">
                 {/* <FooterItem ItemData={FooterData[0]} /> */}
                {FooterData.map((eachItem,index)=>{
                    return(
                        <FooterItem ItemData={eachItem} key={index}/>
                    )
                })}
                <hr className='footerStLine'/>
                <div className='socilaLinksAndRights'>
                    <div className='leftpart'>
                        <div className='socialLinks'>
                            <FaYoutube />
                            <FaSquareInstagram />
                            <FaFacebookSquare />
                            <FaXTwitter />
                            <IoLogoLinkedin />
                        </div>
                        <p>ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</p>
                    </div>
                    <div className='ISO'>
                        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_120,f_avif,q_auto/v1738753226/riir9wdiqn81z2vaadny.webp?_upload_ref=ic_img_tool&__ar__=1.00" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer