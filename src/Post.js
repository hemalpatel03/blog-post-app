// Post.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample blog post data
const posts = [
  { id: 1, title: 'React Basics', content: 'React is a JavaScript library for building user interfaces.' },
  { id: 2, title: 'React Router', content: 'React Router is used for routing in React applications.' },
  { id: 3, title: 'React Hooks', content: 'Hooks are functions that let you use state and other features in functional components.' },
];

const Post = () => {
  const { id } = useParams(); // Get the post id from the URL params
  const post = posts.find(p => p.id === parseInt(id)); // Find the post by id

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default Post;
