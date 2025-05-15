import './index.css'

const  WhyallenonItem=({eachData})=>{
  return (
    <div className="whyallenonItem">
        <img src={eachData.imageUrl} alt="" className='whyallenItemImage'/>
        <h1 className='whyallenItemTitle'>{eachData.title}</h1>
        <p className='whyallenItemDescription'>{eachData.description}</p>
    </div>
  )
}

export default WhyallenonItem;

