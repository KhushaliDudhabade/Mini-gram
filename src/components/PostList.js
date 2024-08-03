import React from 'react';
import PostCard from './PostCard';
import './../App.css';

const PostList = ({ posts }) => {
  return (
    <div className='home-page'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
