import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post, index }) => {
  return (
    <Link to={`/post/${index}`} className="text-decoration-none text-dark">
      <div className="card h-100">
        {post.image && (
          <img src={post.image} className="card-img-top" alt="Blog Post" style={{ height: '200px', objectFit: 'cover' }} />
        )}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content.substring(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
