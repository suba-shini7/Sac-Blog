import React, { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import SearchBar from '../components/SearchBar';
import UserProfile from '../components/UserProfile';
import Notification from '../components/Notification';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    };
    fetchPosts();
  }, []);

  const handleSearch = (query) => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <Notification />
          <SearchBar onSearch={handleSearch} />
          <div className="row">
            {filteredPosts.map(post => (
              <div key={post.id} className="col-md-6 mb-4">
                <BlogPost post={post} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
