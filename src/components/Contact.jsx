import felix from "../assets/felix.png";
import phone from "../assets/phone-icon.png";
import email from "../assets/mail-icon.png";

export default function Contact(props) {
    return (
        <article className="card">
                <img className="card-image" src={props.img} />
                <h1 className="inter">{props.name}</h1>
                <div className="info-group">
                    <img src={phone} className="phone-icon icon-formatting"/>
                    <span className="phone inter">{props.phone}</span>
                </div>
                <div className="info-group">
                    <img src={email} className="email-icon icon-formatting"/>
                    <span className="email-address inter">{props.email}</span>
                </div>    
        </article>
    );
};