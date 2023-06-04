import logo from './logo.svg';
import './App.css';
import { BsFillAlarmFill } from "react-icons/bs";

function App() {
  const dishes = [
    'Black Bean Soup',
    'Macaroni and Cheese',
    'Salmon and Potatoes',
    'Pizza'
  ];

  const Main = (props) => {
    return(
    <section>
          <ul>
            {props.dishes.map((dish) =>(
              <li>{dish}</li>
            ))}
          </ul>
        </section>
    )
  }

  return (
    <div className="App">

      <header className="App-header">
        <BsFillAlarmFill />
        <img src={logo} className="App-logo" alt="logo" />
        <Main dishes={dishes}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
