import React from "react";

function Cards({ item }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-4 mb-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white border">
      <figure>
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          {item.isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p className="px-2">{item.description}</p>
        <div className="card-actions justify-between">
          {item.tags.map((tag, index) => (
            <div className="cursor-pointer px-2 py-1 rounded-lg border hover:bg-pink-500 hover:text-white px-2 py-1 duration-200" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
