import './index.css';



import { useContext } from 'react';
import BuildContext from '../../BuildContext';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const navigate = useNavigate();

    const { inputnumber, setinputnumber,OTP, generateOtp } = useContext(BuildContext);

    const onsubmittingloginform = (e) => {
        e.preventDefault();
        generateOtp();
        alert(`Your OTP is ${OTP}`);
        navigate('/verifyotp');
    }

    const onChnageofthenumberinput = (e) => {
        if (!isNaN(parseInt(e.target.value.slice(-1))) && e.target.value.length <= 10) {
            setinputnumber(e.target.value);
        }
        else {
            setinputnumber(e.target.value.slice(0, -1));
            console.log(e.target.value.slice(0, -1))
        }

    }

    return (
        <div className="login-page">
            <h1>Login with mobile number</h1>
            <form action="" className="login-form" onSubmit={onsubmittingloginform}>
                <input type="text" className="login-input" placeholder="Enter 10-digit mobile number" onChange={onChnageofthenumberinput} value={inputnumber} />
                <button type="submit" className="login-button">
                    send OTP
                </button>
            </form>


        </div>
    )
}

export default LoginPage