import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Site em andamento! Em breve novidades</p>
      </header>
    </div>
  );
}

export default App;
