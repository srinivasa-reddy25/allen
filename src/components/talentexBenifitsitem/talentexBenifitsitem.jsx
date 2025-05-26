import './index.css'

function TalentexBenifitsitem({title, description, image}) {
  return (
    <div className='talentexbenifitsitem'>
        <img src={image} alt="" className='benifitesimage'/>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
    </div>
  )
}

export default TalentexBenifitsitem