import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import RandomRambling from './components/RandomRambling';
import MyFirstBlog from './Blogpages/myFirstBlog';
import MySecondBlog from './Blogpages/mySecondBlog';
import './App.css';

function App() {
  const [navBackground, setNavBackground] = useState('transparent');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 100) {
      setNavBackground('#333');
    } else {
      setNavBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className={`top-nav ${scrollPosition > 100 ? 'scrolled' : ''}`} style={{ backgroundColor: navBackground }}>
          <Link to="/" className="nav-link-button">About Me</Link>
          <Link to="/blog" className="nav-link-button">Blog</Link>
          <Link to="/random-rambling" className="nav-link-button">Random Rambling</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/random-rambling" element={<RandomRambling />} />
          <Route path="/blog/myFirstBlog" element={<MyFirstBlog />} />
          <Route path="/blog/mySecondBlog" element={<MySecondBlog />} />
        </Routes>

        </div>
    </Router>
  );
}

export default App;
