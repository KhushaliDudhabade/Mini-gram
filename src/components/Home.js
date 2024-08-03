import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsThunk } from '../redux/postSlice';
import PostList from './PostList';
import './../App.css';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPostsThunk());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1 className='header'>Social Media App</h1>
      <div className='line'></div>
      <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && <PostList posts={posts} />}
      {status === 'failed' && <div>Error loading posts</div>}
      </div>
    </div>
  );
};

export default Home;
