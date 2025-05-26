import './index.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import BuildContext from '../../BuildContext';

function Verifypage() {
    const { OTP, generateOtp } = useContext(BuildContext);
    const [inputotp, setinputotp] = useState('');
    const navigate = useNavigate();

    const onSubmitingOtpform = (event) => {
        event.preventDefault();
        if (inputotp === OTP) {
            alert("otp verified");
            navigate('/');
        }
        else {
            alert("Enter Valid OTP");
        }
    }

    const onchangingotpinput = (e) => {
        if (!isNaN(parseInt(e.target.value.slice(-1))) && e.target.value.length <= 4) {
            setinputotp(e.target.value);
        }
        else {
            setinputotp(e.target.value.slice(0, -1));
            console.log(e.target.value.slice(0, -1))
        }
    }
    const onclickingResendButton = () => {
        generateOtp();
        setinputotp('');
    }


    return (
        <div className="verifypage-conatiner" >
            <form action="" className="otp-form" >
                <h1>Enter OTP </h1>
                <input value={inputotp} type="text" placeholder="Enter OTP" className='otp-input' onChange={onchangingotpinput} />
            </form>
            <div className="otp-buttons">
                <button className="verify-button" onClick={onSubmitingOtpform}>Verify</button>
                <button className="resend-button" onClick={onclickingResendButton}>Resend OTP</button>
            </div>


        </div>
    )
}

export default Verifypage