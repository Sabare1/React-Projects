import mailIcon from '../images/mail-icon.png'
import phoneIcon from '../images/phone-icon.png'

export default function Contact({img, name, phone, mail}){
    return(
        <article className="contact-card">
            <img 
                src= {img}
                alt={`Photo of ${name}`}
            ></img>
            <h3>{name}</h3>
            <div className="info-group">
                <img 
                    src={phoneIcon}
                    alt="phone icon" 
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src={mailIcon}
                    alt="mail icon"
                />
                <p>{mail}</p>
            </div>
        </article>
    )
}