import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles"  element={<ArticleListPage />} />
            <Route path="/articles/:name" element={<ArticlePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
