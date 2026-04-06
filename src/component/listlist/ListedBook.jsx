import React, { useContext } from "react";
import { ReadBookContext } from "../../context/BookContext";
import BookCard from "../Ui/BookCard";

const ListedBook = () => {
  const { storeBooks, wishList } = useContext(ReadBookContext);
  console.log(storeBooks, wishList);
  return (
    <div>
      {storeBooks.map((book, index) => (
        <BookCard book={book} key={index}></BookCard>
      ))}
    </div>
  );
};

export default ListedBook;
