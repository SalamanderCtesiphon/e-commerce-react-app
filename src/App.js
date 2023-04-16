import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className='page-view'>
        <div className='header'>
          <h1>HomePage!!!!!!</h1>
          <div className='btn-box'>
            <a href="/">Home</ a>
            <a href="/About">About</a>
            <a href='/Shop'>Shop</a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
