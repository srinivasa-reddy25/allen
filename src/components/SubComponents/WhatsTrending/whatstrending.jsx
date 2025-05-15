import './index.css';
import CarouselWithIndicatorsExample from '../Caurosal/caurosal';
import{Slides2} from '../../../ImageData/images.json'

const mesurse = {
    width:'1032px',
    height:'255px'
}



const WhatsTrending=()=>{
    return(
        <div className="whats_trending_container">
            <h1 className='whats_trending_heading'>What's Trending</h1>
            <CarouselWithIndicatorsExample data={Slides2} mesurse={mesurse}/>
            {/* <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747053629/qi9uqsjw39s4ocslbmiy.png?_upload_ref=ic_img_tool&__ar__=4.03" alt="" /> */}
        </div>
    )
}

export default WhatsTrending;
