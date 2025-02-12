import marker from "../assets/marker.png";

export default function Entry(props) {
    return (
        <div className="journal-container">
            <article className="journal-entry">
                <div className="image-container">
                    <img src={props.img} className="entry-image" alt={props.alt} />
                </div>
                <div className="info-container">
                    <img src={marker} className="marker" alt="marker" />
                    <span className="country inter weight-400 spaced upper">{props.country}</span>
                    <a 
                    href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                    className="map-link inter weight-400">View on Google Maps</a>
                    <h1 className="entry-title inter weight-700">{props.name}</h1>
                    <p className="trip-dates inter weight-700">{props.dates}</p>
                    <p className="entry-text inter weight-400">{props.description}</p>                
                </div>
            </article>
        </div>
    );
};