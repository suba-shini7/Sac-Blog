import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { id } = useParams(); // Get the post ID from the URL
  // const id="6704334c567c6159d5ee9746"
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(id);
    const fetchPost = async () => {
      
      
      try {
        if(id){
          const response = await axios.get(`http://localhost:5000/api/blog/${id}`); 
          setPost(response.data); 
        }
        else{
          console.log("No id",id);
          
        }
      } catch (error) {
        // console.error('Error fetching the post:', error);
        setError('Could not fetch the post. Please try again later.',error);
      }
    };
    fetchPost();
  }, [id]);

  if (error) return <div>{error}</div>; // Display error message
  if (!post) return <div>Loading...</div>; // Loading state

  return (
    <div className="container mt-5">
      <button onClick={() => window.history.back()} className="btn btn-secondary mb-3">Back</button>
      <h1 className="post-title p-3 text-center text-primary">{post.title}</h1>
      <hr/>
      {post.image && <img src={post.image} alt={post.title} className="img-fluid mt-2 border rounded py-5 " />}
      <h3 className='text-success'>Content</h3>
      <p className="post-content ">{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
