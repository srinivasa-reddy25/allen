import './index.css';

import Testimonials from '../SubComponents/Testimonials/testimonials';
import { TestimonialsData } from '../../WebData/webdata.json'
import Faqscomponent from '../Faqscomponent/Faqscomponent';
import { callbackFaqs } from '../../WebData/webdata.json';

function RequestCallback() {
    return (
        <div className="request-callback-container">
            <div className="request-callback-banner-container">
                <img
                    src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1738131107/wjdwter18zzzdrpkjerb.png?_upload_ref=ic_img_tool&__ar__=6.95"
                    alt="Request Callback Banner"
                    className="request-callback-banner-image"
                />
            </div>
            <div className="request-callback-form-container">
                <div className="request-callback-form-image-container">
                    <img
                        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1732101887/gvq4wnur2wxjvw7jknbg.webp"
                        alt="Request Callback Form"
                        className="request-callback-form-image"
                    />
                </div>
                <div className="request-callback-form-content">
                    <h1 className='request-callback-form-content-heading'>Request a callback</h1>
                    <form action="" className='request-callback-form'>
                        <div className="request-callback-form-firstname-input-container">
                            <label htmlFor="request-callback-form-firstname-input">First Name</label>
                            <input
                                type="text"
                                placeholder='Enter First Name'
                                className='request-callback-form-firstname-input'
                                required
                                id='request-callback-form-firstname-input'
                            />
                        </div>
                        <div className="request-callback-form-lastname-input-container">
                            <label htmlFor="request-callback-form-lastname-input">Last Name</label>
                            <input
                                type="text"
                                placeholder='Enter Last Name'
                                className='request-callback-form-lastname-input'
                                required
                                id='request-callback-form-lastname-input'
                            />
                        </div>
                        <div className="request-callback-form-email-input-container">
                            <label htmlFor="request-callback-form-email-input">Email</label>
                            <input
                                type="email"
                                placeholder='Enter Email'
                                className='request-callback-form-email-input'
                                required
                                id='request-callback-form-email-input'
                            />
                        </div>
                        <div className="request-callback-form-phone-input-container">
                            <label htmlFor="request-callback-form-phone-input">Phone Number</label>
                            <input
                                type="tel"
                                placeholder='Enter Phone Number'
                                className='request-callback-form-phone-input'
                                required
                                id='request-callback-form-phone-input'
                            />
                        </div>
                        <div className="request-callback-form-class-input-container">
                            <label htmlFor="">Class</label>
                            <select className='request-callback-form-class-input' required>
                                <option value="">Select Class</option>
                                <option value="6">Class 6</option>
                                <option value="7">Class 7</option>
                                <option value="8">Class 8</option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                                <option value="12_plus">Class 12 Plus</option>
                            </select>
                        </div>
                        <div className="request-callback-form-goal-input-container">
                            <label htmlFor="request-callback-form-goal-input">Goal</label>
                            <select className='request-callback-form-goal-input' required>
                                <option value="">Select Goal</option>
                                <option value="neet">NEET</option>
                                <option value="jee">JEE</option>
                                <option value="foundation">Foundation</option>
                                <option value="olympiad">Olympiad</option>
                                <option value="ntse">NTSE</option>
                            </select>
                        </div>
                        <div className="request-callback-form-program-input-container">
                            <label htmlFor="request-callback-form-program-input">Program</label>
                            <select className='request-callback-form-program-input' required>
                                <option value="">Select Program</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div className="request-callback-form-tandc-input-container">
                            <input
                                type="checkbox"
                                className='request-callback-form-tandc-input'
                                id='request-callback-form-tandc-input'
                                required
                            />
                            <label htmlFor="request-callback-form-tandc-input">I agree to the <a href="#">Terms and Conditions</a></label>
                        </div>
                        <div className="request-callback-form-authorize-container">
                            <input
                                type="checkbox"
                                className='request-callback-form-authorize-input'
                                id='request-callback-form-authorize-input'
                                required
                            />
                            <label htmlFor="request-callback-form-authorize-input">I authorize Aakash to call me or send SMS/WhatsApp messages to this number</label>
                        </div>
                        <button type="submit" className='request-callback-form-submit-button'>Request Callback</button>
                    </form>
                </div>
            </div>
            <div className="request-callback-additional-info-container">
                <a href="#" className='request-callback-image-link'>
                    <img
                        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1744026801/y7zaovofbswpvkhpldck.png?_upload_ref=ic_img_tool&__ar__=4.03"
                        alt="Request Callback Icon"
                        className='request-callback-image'
                    />
                </a>
            </div>
            <Testimonials TestimonialsData={TestimonialsData} />
            <Faqscomponent talentexfaqs={callbackFaqs} />
        </div>
    )
}

export default RequestCallback