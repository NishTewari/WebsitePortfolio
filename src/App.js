//import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="App">
    <div className="navbar">
      <div className="title">Nish Tewari</div>
      <div className="logo">Logo</div>
      <div className="links">
        <a href="#hero">Portfolio</a>
        <a href="">Resume</a>
        <a href="">Garage</a>
        <a href="">Login</a>
      </div>
    </div>
    <div className="section" id="hero">
      <div className="header"><h1>Nish Tewari</h1></div>
      <div className="information">
        <div className="info-column"></div>
        <div className="hero-image"></div>
        <div className="info-column"></div>
        <div className="social-buttons"></div>
      </div>
    </div>
    <div className="section" id="portfolio">
      <div className="header"><h1>Portfolio</h1></div>
      <div className="card">
        <div className="info">
          <div className="content">
            <p></p>
            <h3>Project Name</h3>
            <p>Desccription lorem ipsum</p>
          </div>
          <div className="buttons">
            <button>View Project</button>
            <button>Github Repo</button>
          </div>
        </div>
        <div className="images"></div>
      </div>
    </div>
    <div className="section" id="garage">
      <div className="header"><h1>Garage</h1></div>
    </div>
   </div>
  );
}

export default App;