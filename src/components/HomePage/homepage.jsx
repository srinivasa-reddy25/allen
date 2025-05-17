import './index.css'
import ScholarShip from '../ScholarShip/scholarship';
import SecondPart from '../SecondPart/secondpart'
import ThirdPart from'../ThirdPart/thirdpart'
import FourthPart from '../FourthPart/fourthpart'
import Feedback from '../FeedBack/feedback';

function Homepage() {
  return (
    <>
        <ScholarShip/>
        <SecondPart/>
        <ThirdPart/>
        <FourthPart/>
        <Feedback/>
    </>
  )
}

export default Homepage