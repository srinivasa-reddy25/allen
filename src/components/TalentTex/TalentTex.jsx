import './index.css'

import Add from '../SubComponents/Add/add'
import TalentexBenifitsitem from '../talentexBenifitsitem/talentexBenifitsitem'
import Faqscomponent from '../Faqscomponent/Faqscomponent'
import { benefitsofTalentex } from '../../WebData/webdata.json'
import { FaArrowRightLong } from "react-icons/fa6";
import AllenAppAdvantage from '../SubComponents/AllenAppAdvantages/allenappAdvantage'
import {allYouneettoKnow} from '../../WebData/webdata.json';

import { talentexfaqs } from '../../WebData/webdata.json'

function TalentTex() {
    return (
        <div className='talentexContainer'>
            <Add url={"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747375941/wxnefgxsiblpxbkfdqol.png?_upload_ref=ic_img_tool&__ar__=14.60"} />
            <div className='TalentexHeropart'>
                <div className='TalentexHeropartRight'>
                    <div className='cashRewardscontainer'>
                        <h1><span className='talentexspan'>TALLENTEX</span> for ALLEN Online-<br />Scholarships, cash rewards & more!</h1>
                        <ul className='rewardpoints'>
                            <li className='rewardpoint'>
                                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1747115591/gxitm3s2yxaafxiw4zh4.svg?_upload_ref=ic_img_tool&__ar__=1.00" alt="" />
                                <p>Gives an early start to students aiming for future competitive exams</p>
                            </li>
                            <li className='rewardpoint'>
                                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1747115483/z6k6htl5o6lbcubudesq.svg?_upload_ref=ic_img_tool&__ar__=1.00" alt="" />
                                <p>Nurtures young talent with scholarships, cash rewards & more</p>
                            </li>
                            <li className='rewardpoint'>
                                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1747115415/kyxmbnqz843s7dragfir.svg?_upload_ref=ic_img_tool&__ar__=1.00" alt="" />
                                <p>2-hour online test (in English) for class 5-10 students</p>
                            </li>
                        </ul>
                    </div>
                    <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1747116708/pwzwxw3qfwrxwzimy7pn.svg?_upload_ref=ic_img_tool&__ar__=2.73" alt="" className='rewardsimage' />
                    {/* <Add url={""} className=""/> */}
                    <div className='BenifitsofTalentexcontainer'>
                        <h1 className='talentexherotitle'>Benefits of TALLENTEX</h1>
                        <div className='BenifitsofTalentex'>
                            {benefitsofTalentex.map((item, index) => {
                                return (
                                    <TalentexBenifitsitem key={index} title={item.title} description={item.description} image={item.imageUrl} />
                                )
                            }
                            )}
                        </div>
                    </div>

                    <div className='rewardsrankbutton'>
                        <p>View cash rewards for every rank</p>
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className='registrationformcontainer'>
                    <form action="" className='formcontainer'>
                        <p className='limitedOffertexrt'>LIMITED TIME OFFER!</p>
                        <h1 className='registrationformeading'>Register for TALLENTEX Online at ₹150</h1>
                        <hr className='registrationformline'/>
                        <div className='namecontainer'>
                            <label htmlFor="name">Student's Full Name*</label>
                            <input type="text" name="name" id="name" placeholder='Ex : Rohit Singh' />
                        </div>
                        <div className='parentnamecontainer'>
                            <label htmlFor="parentname">Parent's Full Name*</label>
                            <input type="text" name="parentname" id="parentname" placeholder='Ex : Ramesh Singh' />
                        </div>
                        <div className='mobilecontainer'>
                            <label htmlFor="mobile">Mobile Number*</label>
                            <input type="text" name="mobile" id="mobile" placeholder='Ex : 9876543210' />
                        </div>
                        <div className='PresentClasscontainer'>
                            <label htmlFor="PresentClass">Present Class*</label>
                            <select name="PresentClass" id="PresentClass">
                                <option value="5th">5th</option>
                                <option value="6th">6th</option>
                                <option value="7th">7th</option>
                                <option value="8th">8th</option>
                                <option value="9th">9th</option>
                                <option value="10th">10th</option>
                            </select>
                        </div>
                        <div className='CareerGoalcontainer'>
                            <label htmlFor="CareerGoal">Career Goal*</label>
                            <select name="CareerGoal" id="CareerGoal">
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="Olympiads">Olympiads</option>
                                <option value="Boards">Boards</option>
                            </select>
                        </div>
                        <div className='statecontainer'>
                            <label htmlFor="state">State*</label>
                            <select name="state" id="state">
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                        <div className='examdatecontainer'>
                            <label htmlFor="examdate">Select Exam Date (01:00 PM - 3:00 PM)*</label>
                            <select name="examdate" id="examdate">
                                <option value="1st October 2023">1st October 2023</option>
                                <option value="8th October 2023">8th October 2023</option>
                            </select>
                        </div>
                        <button type="submit" className='registrationformbutton'>
                            Register Now
                        </button>
                        <p className='TandC'>By registering you accept our <a href="">Terms & Conditions</a></p>
                    </form>
                </div>

            </div>
            <div className='Talentexstatscontainer'>
                <img className='talenttaxStats' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747208760/tldooemobx2htmwpi8zl.png?_upload_ref=ic_img_tool&__ar__=4.14" alt="" />
            </div>
            <AllenAppAdvantage AllenAppAdvantageData={allYouneettoKnow} namecomponent={'All you need to know'}/>
            <Faqscomponent talentexfaqs={talentexfaqs}/>
        </div>
    )
}

export default TalentTex