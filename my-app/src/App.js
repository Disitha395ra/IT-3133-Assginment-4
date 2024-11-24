import './App.css';
import {animals} from './data/AnimalsDb'
import name from './components/name'
import pictures from './components/pictures'
import result from './components/result'

function App() {
  return (
    <div>
      <h2>Animal maching game</h2>
      <div className="leftdiv">
        <table>
          <tr>
            <result/>
          </tr>
        </table>
      </div>
      <div className="middlediv">
        <table>
          <tr>
          <name/>
          </tr>
        </table>
      </div>
      <div classname="rightdiv">
        <table>
          <tr>
            <pictures/>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
