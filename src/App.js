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
            {props.dishes.map((dish,i) =>(
              <li key={i}>{dish}</li>
            ))}
          </ul>
        </section>,
        <img src='https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600' alt='restaurant'/>
    )
  }

  const Test = ({library}) =>{
    console.log(library)
    
  }

  return (
    <div className="App">

      <header className="App-header">
        <BsFillAlarmFill />
        <img src={logo} className="App-logo" alt="logo" />
        <Main dishes={dishes}/>
        <Test library='React'/>
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
