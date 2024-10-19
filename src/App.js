// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
