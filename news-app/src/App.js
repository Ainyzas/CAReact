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
        <Route path="/technology" element={<NewsPage category="technology" />} />
        <Route path="/health" element={<NewsPage category="health" />} />
        <Route path="/science" element={<NewsPage category="science" />} />
        <Route path="/sports" element={<NewsPage category="sports" />} />
        <Route path="/business" element={<NewsPage category="business" />} />
      </Routes>
    </div>
  );
}

export default App;
