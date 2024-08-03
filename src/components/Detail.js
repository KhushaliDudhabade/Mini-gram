import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './../App.css';

const Detail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.items.find((post) => post.id.toString() === id)
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='detail-page'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
    </div>
  );
};

export default Detail;
