import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage'; // New BlogPostPage for full post
import AboutUsPage from './pages/AboutUsPage'; // Your existing About Page
 import ContactUsPage from './pages/ContactUsPage';// Your existing Contact Page
import './App.css'; // Your custom styles
import NavBar from './components/NavBar';
import HeroPage from './pages/HeroPage';

const App = () => {
  const [posts, setPosts] = React.useState([]);

  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div className='text-center p-3'>
      <img src="https://www.sadakath.ac.in/images/topbar_finalv5.png" alt='logo'  className='img-fluid'/>
    </div>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage handleNewPost={handleNewPost} posts={posts} />} />
          <Route path="/home" element={<HeroPage/>}/>
          <Route path="/api/blog/:id" element={<BlogPostPage posts={posts} />} /> {/* Route for full post */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
