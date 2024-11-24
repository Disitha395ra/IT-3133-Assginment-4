import './App.css';
import {animals} from './data/AnimalsDb'
import name from './components/name'

function App() {
  return (
    <div>
      <h2>Animal maching game</h2>
      <div className="leftdiv">
        
      </div>
      <div className="middlediv">
          <name/>
      </div>
      <div classname="rightdiv">

      </div>
    </div>
  );
}

export default App;
