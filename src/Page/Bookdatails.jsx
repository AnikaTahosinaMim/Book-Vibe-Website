// import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { ReadBookContext } from "../context/BookContext";
import { useContext } from "react";
// const allPromessed = fetch("/booksData.json").then((res) => res.json());

const Bookdatails = () => {
  const { id } = useParams();
  //   const books = use(allPromessed);
  //   console.log(books);
  const books = useLoaderData();
  const { handleMarksAsRead, handleWishList } = useContext(ReadBookContext);

  const expectedBooks = books.find((book) => book.bookId === Number(id));
  console.log(expectedBooks);
  const {
    bookName,
    author,
    image,
    yearOfPublishing,
    publisher,
    rating,
    review,
    category,
    totalPages,
  } = expectedBooks;

  return (
    <div>
      <div className="card my-8 grid grid-cols-2 lg:card-side bg-base-100 container mx-auto shadow-sm">
        <figure className="max-w-full flex justify-center items-center px-0 rounded-2xl bg-gray-300">
          <img
            className="h-[450px] w-[300px] rounded-3xl"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>by:{author}</p>
          <p>{category}</p>
          <p>{review}</p>
          {expectedBooks.tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-green-500 font-bold bg-gray-100 items-center px-3 py-1 rounded-full"
            >
              {tag}
            </div>
          ))}
          <div className=" border-t space-y-3">
            <div className="flex justify-center items-center gap-3">
              <span>Number of pages :</span> <span>{totalPages}</span>
            </div>

            <div className="flex justify-center items-center gap-3">
              <span>Publisher :</span> <span>{publisher}</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>year of publishing :</span> <span>{yearOfPublishing}</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>rating :</span> <span>{rating}</span>
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => handleMarksAsRead(expectedBooks)}
                className="btn"
              >
                read
              </button>

              <button
                onClick={() => handleWishList(expectedBooks)}
                className="btn btn-primary"
              >
                WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdatails;
