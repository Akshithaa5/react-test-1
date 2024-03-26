// App.js
import React, { useState } from 'react';
import './App.css';
import BlogForm from './Components/BlogForm';
import BlogList from './Components/BlogList';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addBlogHandler = (newBlog) => {
    if (editIndex === -1) {
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]); // Add new blog post
    } else {
      const updatedBlogs = [...blogs];
      updatedBlogs[editIndex] = newBlog; // Update existing blog post
      setBlogs(updatedBlogs);
      setEditIndex(-1); // Reset editIndex after updating
    }
  };

  const deleteBlogHandler = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  const editBlogHandler = (index) => {
    setEditIndex(index);
  };

  const blogTitle = `My Blog (${blogs.length} Posts)`; // Title with count of blog posts

  return (
    <div className="app">
      <h1>{blogTitle}</h1>
      <BlogForm onAddBlog={addBlogHandler} editedBlog={editIndex !== -1 ? blogs[editIndex] : null} editIndex={editIndex} />
      <div className="blogs">
        {blogs.map((blog, index) => (
          <BlogList
            key={index}
            title={blog.title}
            imageUrl={blog.imageUrl}
            description={blog.description}
            onDelete={() => deleteBlogHandler(index)}
            onEdit={() => editBlogHandler(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
