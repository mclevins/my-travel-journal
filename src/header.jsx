import globe from "./assets/globe.png";

export default function Header() {
    return (
        <header className="header">
            <img src={globe} className="globe"/>
            <h5 className="title inter-400">my travel journal.</h5>
        </header>
    );
};