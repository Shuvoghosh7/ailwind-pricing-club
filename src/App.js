import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Pricing from './Component/Pricing/Pricing';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-3xl font-bold underline text-yellow-300'>ctailwind-pricing-club</h1>
      <Pricing/>
    </div>
  );
}

export default App;
