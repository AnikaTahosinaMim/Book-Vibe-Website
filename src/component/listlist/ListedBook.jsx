import React, { useContext, useEffect, useState } from "react";
import { ReadBookContext } from "../../context/BookContext";
import BookCard from "../Ui/BookCard";

const ListedBook = ({ shortingType }) => {
  const { storeBooks, wishList } = useContext(ReadBookContext);
  console.log(storeBooks, wishList);
  const [filterReadlist, setFilterReadlist] = useState(storeBooks);
  useEffect(() => {
    if (shortingType) {
      if (shortingType === "pages") {
        console.log(shortingType);
        const sortData = [...storeBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortData, "sdjkfhfirwu");
        setFilterReadlist(sortData);
      } else if (shortingType === "rating") {
        const sortData = [...storeBooks].sort((a, b) => a.rating - b.rating);
        console.log(sortData, "sdjkfhfirwu");
        setFilterReadlist(sortData);
      }
    }
  }, [shortingType, storeBooks]);

  if (filterReadlist.length === 0) {
    return (
      <div className="h-[50vh] mx-auto py-10 bg-gray-200  text-center font-bold text-2xl justify-center">
        <h2>No Book List data</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {filterReadlist.map((book, index) => (
        <BookCard book={book} key={index}></BookCard>
      ))}
    </div>
  );
};

export default ListedBook;
