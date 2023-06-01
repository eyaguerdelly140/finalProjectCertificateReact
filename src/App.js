import logo from './logo.svg';
import './App.css';
import Events from './Components/Events.jsx';
import Counter from './Components/Counter';
import Artists from './Components/Artists';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Events></Events>
      <Artists></Artists>
      <Counter></Counter>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
