import './App.css';


function App() {
  return (
    <div className="App">
      <div className='page-view'>
        <div className='header'>
          <h1>HomePage!!!!!!</h1>
          <div className='btn-box'>
            <form action="/about">
              <button type="submit">About</button>
            </form>
            <form action="/shop">
              <button type="submit">Shop</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
