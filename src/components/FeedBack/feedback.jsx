import './index.css';

const Feedback = () => {
    return (
        <div className="feedback_container">
            <div className='feedback'>
                <div className='imageContainer'>
                    <img className='feedbackImage' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1730878962/oqfy1klihlgn0vmpy77w.webp?_upload_ref=ic_img_tool" alt="" />
                </div>
                <form action="" className="feedback_form" >
                    <h1 className='feedbackformheading'>Request a callback</h1>
                    <hr className='feedbackStLine' />
                    <div className="input_container">
                        <div className='studentName_container'>
                            <label htmlFor="StudentName">
                                Student Name
                            </label>
                            <input type="text" id='StudentName' placeholder='Ex: Rohit Singh ' />
                        </div>
                        <div className='StudentNumber_container'>
                            <label htmlFor="ParentName" >
                                studentNumber
                            </label>
                            <input type="text" id='studentNumber' placeholder='Ex: +91 9876543210' />

                        </div>
                        <div className='StudentClass_container'>
                            <label htmlFor="StudentClass">
                                StudentClass
                            </label>
                            <select name="studentclass" id="StudentClass" >
                                <option value="class6" >6th</option>
                                <option value="class7">7th</option>
                                <option value="class8">8th</option>
                                <option value="class9">9th</option>
                            </select>
                        </div>
                        <div className='StudentGoals_container'>
                            <label htmlFor="StudentGoals">
                                StudentGoals
                            </label>
                            <select name="studentGoals" id="StudentGoals" >
                                <option value="Neet" >NEET</option>
                                <option value="jeeAdvanced">JEE ADVANCED</option>
                                <option value="pncf">PNCF (Olympiads/Boards and Others)</option>
                                <option value="cuet">CUET</option>
                            </select>
                        </div>
                        <div className='PreferredCourses_container'>
                            <label htmlFor="PreferredCourses">
                                PreferredCourses
                            </label>
                            <select name="PreferredCourses" id="PreferredCourses">
                                <option value="Online">Online Courses</option>
                                <option value="Classroom">Classroom Courses</option>
                                <option value="Oninetest">Online Test Series</option>
                            </select>
                        </div>
                        <div className='State_container'>
                            <label htmlFor="State">
                                State
                            </label>
                            <select name="State" id="State">
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="TamilNadu">Tamil Nadu</option>
                                <option value="AndhraPradesh">Andhra Pradesh</option>
                                <option value="Telangana">Telangana</option>
                                <option value="UttarPradesh">Uttar Pradesh</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="HimachalPradesh">Himachal Pradesh</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Odisha">Odisha</option>
                                <option value="WestBengal">West Bengal</option>
                                <option value="Assam">Assam</option>
                                <option value="ArunachalPradesh">Arunachal Pradesh</option>
                                <option value="Nagaland">Nagaland</option>
                            </select>
                        </div>
                    </div>

                    <p>By continuing, you agree to our <a href="">Terms & Conditions</a></p>
                    <button className='feedbackformButton'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Feedback;