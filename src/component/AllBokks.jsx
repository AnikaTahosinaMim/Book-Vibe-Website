import React, { use } from "react";
import BookCard from "./Ui/BookCard";
const allPromessed = fetch("/booksData.json").then((res) => res.json());

const AllBokks = () => {
  const books = use(allPromessed);
  console.log(books);
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {books.map((book,index) => (
         <BookCard key={index} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBokks;
