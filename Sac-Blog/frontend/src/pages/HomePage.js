import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

// import './HomePage.css'; // Add your custom styles if needed

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
  });
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  // Fetch all posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/blog/add', formData);
      setPosts([...posts, response.data.post]);
      setFormData({ title: '', content: '', image: '' });
      handleCloseModal();
    } catch (error) {
      console.error('Error posting the blog:', error.response || error);
    }
  };

  const viewFullPost = (post) => {
    // Navigate to the full post page
    navigate(`/api/blog/${post._id}`);
     // Use the unique ID of the post
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 "><em>Welcome to our corner of the internet!</em></h1>

      {/* "+" Icon for adding a blog post */}
      <div className="text-right mb-4">
        <button className="btn btn-primary rounded-circle" onClick={handleShowModal}>
          +
        </button>
      </div>

      {/* Blog Posts List */}
      <div className="row">
        {posts.map((post, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card " onClick={() => viewFullPost(post)}>
         
                <p className='px-2'>{post.createdAt.slice(0,10)}</p>
               
              {post.image && (
                <img src={post.image} className="card-img-top p-2 " alt={post.title} height={300}/>
              )}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  {post.content.length > 100
                    ? post.content.substring(0, 100) + '...'
                    : post.content}
                </p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding a new post */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Blog Post</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="formTitle">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="formContent">Content</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="formImage">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
