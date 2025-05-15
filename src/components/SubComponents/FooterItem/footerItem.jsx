import './index.css'


const FooterItem=({ItemData})=>{
    return(
        <ul className='FooterItemContainer'>
            <li className='linksHeading'>{ItemData[0]}</li>
            {(ItemData.slice(1,ItemData.length)).map((eachLink,index)=>{
                return(
                    <li className='ListItem' key={index}>
                        <a href="#" className='FooterLink'>{eachLink}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default FooterItem;