// BlogForm.js
import React, { useState, useEffect } from 'react';
import Card from './UI/Card';
import './BlogForm.css';

const BlogForm = ({ onAddBlog, editedBlog, editIndex }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editedBlog) {
      setTitle(editedBlog.title);
      setImageUrl(editedBlog.imageUrl);
      setDescription(editedBlog.description);
    }
  }, [editedBlog]);

  const submitHandler = (event) => {
    event.preventDefault();
    const newBlog = {
      title,
      imageUrl,
      description,
    };
    onAddBlog(newBlog);
    setTitle('');
    setImageUrl('');
    setDescription('');
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit">{editIndex !== -1 ? 'Update Blog' : 'Post Blog'}</button>
        </div>
      </form>
    </Card>
  );
};

export default BlogForm;
