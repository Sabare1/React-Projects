import '../index.css'
import markerLogo from '../assets/marker.png'

export default function Entry(props){
    console.log(props);
    return(
        <article className='entry-journal'>
            <img src={props.img.src} alt={props.img.alt} className='travel-img'></img>
            <div className="description">
                <div className='info'>
                    <img src={markerLogo} alt="marker icon" className='marker-icon'></img>
                    <span className='country-name'>{props.country}</span>
                    <a href= {props.googleMapsLink}
                    className='maps-link'>
                    View on google maps</a>
                </div>
                <h1 className='place-name'>{props.title}</h1>
                <time>{props.date}</time>
                <p>{props.text}</p>
            </div>
        </article>
    )
}