import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const PostCard = ({ post }) => {
  return (
    <div className='post-card'>
      <h2>{post.title.slice(0, 20)}...</h2>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>{post.body.slice(0, 50)}...</p>
      <Link to={`/item/${post.id}`}>Read More...</Link>
    </div>
  );
};

export default PostCard;
