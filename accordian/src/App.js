
// import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <h1>Accordion</h1>
      {data.map((item, index) => {
        return(<div key={index} className="content">
          <Accordion user={item} />
        </div>)
      })
    }
    </div>

  );
}

export default App;
