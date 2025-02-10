import React from 'react';
import Service from '../appwrite/config';
import { Link } from 'react-router-dom';

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className=" bg-gray-100 rounded-xl p-4 transition-transform duration-300 hover:scale-105 shadow-lg ">
        <div className="w-full flex justify-center mb-4">
          <img 
            src={Service.getFilePreview(featuredImage)} 
            alt={title} 
            className="rounded-xl w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-center">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
