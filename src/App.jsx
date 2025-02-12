import Header from './components/Header';
import Entry from './components/Entry';
import Contact from './components/Contact';
import data from './data';

export default function App() {
    const entryElements = data.map(entry => {
        return <Entry 
            key={entry.id}
            {...entry}
        />
    });
    return (
        <>
            <Header/>
            <div className="entry-list-container">
                <ul className="entry-list">
                    {entryElements}
                </ul>
            </div>
        </>   
    );
};