// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

// Sample blog post data
const posts = [
  { id: 1, title: 'React Basics', content: 'React is a JavaScript library for building user interfaces.' },
  { id: 2, title: 'React Router', content: 'React Router is used for routing in React applications.' },
  { id: 3, title: 'React Hooks', content: 'Hooks are functions that let you use state and other features in functional components.' },
];

const Home = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
