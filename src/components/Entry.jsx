import marker from "../assets/marker.png";

export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="image-container">
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" className="entry-image" alt="picture of Japan" />
            </div>
            <div className="info-container">
                <img src={marker} className="marker" alt="marker" />
                <span className="country inter weight-400 spaced upper">japan</span>
                <a 
                href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                className="map-link inter weight-400">View on Google Maps</a>
                <h1 className="entry-title inter weight-700">Mount Fuji</h1>
                <p className="trip-dates inter weight-700">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-text inter weight-400">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 
                    (12,380 feet). Mount Fuji is the single most popular tourist
                        site in Japan, for both Japanese and foreign tourists.
                </p>                
            </div>
        </article>
    );
};