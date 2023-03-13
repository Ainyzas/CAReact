import './App.css';

function App() {
  return (
    <div>
      <header>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
          alt="microsoft logo"></img>
      </header>
      <nav className="green-background">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contacts</a>
      </nav>
      <main>
        <div>
          <img
            className="background"
            src="https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439__340.jpg"
            alt="dune background"></img>
          <div className="green-background header-text">
            <h3>About</h3>
          </div>
          <p>
            lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem
            imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum
          </p>
        </div>
      </main>
      <footer>
        <div>
          <div className="green-background header-text">
            <h3>Contacts</h3>
          </div>
          <p>
            lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem
            imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum
            dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor
            sit amet
            <br />
            <br />
            lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem
            imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum
            dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor sit amet lorem imsum dolor
            sit amet
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
