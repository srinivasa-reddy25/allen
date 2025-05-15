import './index.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5"; 
import { useState ,useEffect} from 'react';

export const CarouselWithIndicatorsExample = ({data,mesurse}) => {
  const[slide,setSlide] = useState(0);

  const prevSlide = () => {
    if(slide === 0){
      setSlide(data.length-1);
    }else{
      setSlide(slide-1);
    }
  }

  const nextSlide = () => {
    if(slide === data.length-1){
      setSlide(0);
    }else{
      setSlide(slide+1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }
  ,[]);
  
  
  return (
    <div className="carousel-container">
      <IoArrowBackCircle  className='arrow arrow-left' onClick={prevSlide}/>
      {data.map((item, index) => (
        <img src={item.src} alt={item.alt} key={index} className={slide===index ? "slide":"slide slide-hidden"} width={mesurse.width} height={mesurse.height}/>
      )
      )}
       <IoArrowForwardCircle className='arrow arrow-right'  onClick={nextSlide}/>
      <span className='indecators'>
        {data.map((_,index)=>{
          return(
            <button key={index} onClick={()=>{
              setSlide(index)
            }} className={slide===index? 'indecator':'indecator indicator-inactive'}></button>
          )
        })}
      </span>

    </div>
  )
}

export default CarouselWithIndicatorsExample
