import React, { useState, useEffect } from 'react';
import './App.css';
import { animals } from './data/AnimalsDb';
import Name from './components/name';
import Pictures from './components/pictures';
import Result from './components/result';

function App() {
    const [randomAnimal, setRandomAnimal] = useState(null);
    const [result, setResult] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        setRandomAnimal(animals[randomIndex]);
    }, []);

    const handleSelection = (selectedName) => {
        if (selectedName === randomAnimal.name) {
            setResult("Win");
        } else {
            setResult("Lose");
        }
    };

    return (
        <div>
            <h2>Animal Matching Game</h2>
            <div className="leftdiv">
                <Result result={result} />
            </div>
            <div className="middlediv">
                {randomAnimal && <Name animalName={randomAnimal.name} />}
            </div>
            <div className="rightdiv">
                <Pictures animals={animals} handleSelection={handleSelection} />
            </div>
        </div>
    );
}

export default App;
