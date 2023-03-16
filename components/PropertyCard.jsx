/* eslint-disable */
import SecondaryBtn from "./SecondaryBtn";
import Link from "next/link";

const Propertycard = ({item}) => {
    return (
        <div className="listing-card" style={{background: `url(${item.coverImage.url})`, backgroundSize:'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
            <div className='card-details'>
            <div className='details-div'>
                <span><img src='/location-icon.svg'/> <p className='smaller-text'>{item.address}</p> </span>
                <span><img src='/rooms-icon.svg' /><p className='smaller-text'>{item.shortInfo}</p></span>
            </div>
            <SecondaryBtn link={`/listings/${item.slug}`} text="view property" borderRadius ="10px" color="#fff" width="100%" fontSize = "13px" />
            </div>
        </div>
        
    )
}

export default Propertycard;