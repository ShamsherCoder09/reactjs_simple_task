import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Card from './components/card/Card';
// import Countdown from './components/countTimer/CountDown';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card />
      {/* <Countdown /> */}

    </div>
  );
}

export default App;
