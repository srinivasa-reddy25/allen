import './index.css'
import WhyallenonItem from '../whyallenItem/whyallenonline'

const whyallenOnlineData = [
    {
        id: 1,
        title: "Kota Faculty",
        description: "Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years",
        imageUrl:"https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489047/1_dfic0f.svg"
    },
    {
        id: 2,
        title: "Proven Results",
        description: "Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams",
        imageUrl:"https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489326/2_ddboz0.svg"
    },
    {
        id: 3,
        title: "Learning Tools",
        description: "24x7 doubt resolution and customized study material to test, and improve continuously",
        imageUrl:"https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489375/3_ivbkv8.svg"
    },
    {
        id: 4,
        title: "Mentor Support",
        description: "Regular mentorship sessions with mentor, regular mentorship sessions, guidance on exam strategy & updates to parents",
        imageUrl:"https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489375/4_ar5ewd.svg"
    }
]


const WhyALLENOnline = () => {
    return(
        <div className="whyallenOnline__container">
            <div className="whyallenOnline">
            <h1 className="">Why ALLEN Online</h1>
            <div className="whyallenOnline__container">
                {whyallenOnlineData.map((eachItem)=>{
                    return(
                        <WhyallenonItem key={eachItem.id} eachData={eachItem}/>
                    )
                })}
                {/* <WhyallenonItem eachData={whyallenOnlineData[0]}/> */}
            </div>
            <button className='exploreOnlineCoursesBtton'>Explore Online Courses</button>
        </div>
        </div>
        
    )
}


export default WhyALLENOnline