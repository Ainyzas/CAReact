import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './components/UI/organisms/NewsPage/NewsPage';
import Header from './components/UI/molecules/Header/Header';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/health" element={<NewsPage category="health" />} />
        <Route path="/science" element={<NewsPage category="science" />} />
        <Route path="/sports" element={<NewsPage category="sports" />} />
      </Routes>
    </div>
  );
}

export default App;
