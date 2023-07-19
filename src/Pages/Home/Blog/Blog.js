import React from 'react';

const Blog = ({ blog }) => {
  const { name, image, date, title, description } = blog;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="flex items-center">
        <figure className="px-4 py-2">
          <img
            src={image}
            alt={image}
            className="rounded-full w-10 h-16 object-cover"
          />
        </figure>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-500">{date}</p>
        </div>
      </div>
      <div className="card-body">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Blog;
