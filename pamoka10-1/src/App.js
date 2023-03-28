import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Services from './components/Services/Services';
import PreviousWork from './components/PreviousWork/PreviousWork';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/previous-work" element={<PreviousWork />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
