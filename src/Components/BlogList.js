// BlogList.js
import React from 'react';
import Card from './UI/Card';
import './BlogList.css';

const BlogList = ({ title, imageUrl, description, onDelete, onEdit }) => {
  return (
    <Card>
      <div className="blog">
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
        <div className="buttons">
          <button onClick={onDelete}>Delete Blog</button>
          <button onClick={onEdit}>Edit Blog</button>
        </div>
      </div>
    </Card>
  );
};

export default BlogList;
