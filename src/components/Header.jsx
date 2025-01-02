import globe from "/src/assets/globe.png";

export default function Header() {
    return (
        <header className="header">
            <img src={globe} className="title-globe" alt="globe icon"/>
            <h5 className="title inter weight-400">my travel journal.</h5>
        </header>
    );
};