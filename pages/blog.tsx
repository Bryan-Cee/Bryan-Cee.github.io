import React from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';

const Blog = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col h-screen">
      <Nav/>
      <h2 className="self-center my-8 text-5xl">Blog Posts</h2>
      <div>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Blog;
