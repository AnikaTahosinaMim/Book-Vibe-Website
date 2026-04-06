import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div>
      <Link
        to={`/bookdatails/${book.bookId}`}
        className="card bg-base-100 shadow-sm"
      >
        <figure className="p-5 bg-gray-200 rounded-2xl">
          <img className="h-[250px] rounded-lg" src={book.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-3">
            {book.tags.map((tag, index) => (
              <div
                key={index}
                className="badge text-green-500 font-bold bg-gray-100 items-center px-3 py-1 rounded-full"
              >
                {tag}
              </div>
            ))}
          </div>

          <h2 className="card-title">
            <p>{book.bookName}</p>
          </h2>
          <p>by:{book.author}</p>

          <div className="card-actions justify-between border-t border-dashed pt-5 border-gray-300">
            <div className="font-semibold">{book.category}</div>
            <div className="font-semibold flex items-center gap-2">
              {book.rating} <FaStar></FaStar>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
