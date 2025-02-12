import marker from "../assets/marker.png";

export default function Entry(props) {
    return (
        <div className="journal-container">
            <article className="journal-entry">
                <div className="image-container">
                    <img src={props.img.src} className="entry-image" alt={props.img.alt} />
                </div>
                <div className="info-container">
                    <img src={marker} className="marker" alt="marker" />
                    <span className="country inter weight-400 spaced upper">{props.country}</span>
                    <a 
                    href={props.googleMapsLink}
                    className="map-link inter weight-400">View on Google Maps</a>
                    <h1 className="entry-title inter weight-700">{props.title}</h1>
                    <p className="trip-dates inter weight-700">{props.dates}</p>
                    <p className="entry-text inter weight-400">{props.text}</p>                
                </div>
            </article>
        </div>
    );
};