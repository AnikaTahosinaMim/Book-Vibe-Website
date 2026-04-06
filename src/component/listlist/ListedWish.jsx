import React, { useContext, useEffect, useState } from "react";
import { ReadBookContext } from "../../context/BookContext";
import BookCard from "../Ui/BookCard";

const ListedWish = ({shortingType}) => {
  const { storeBooks, wishList } = useContext(ReadBookContext);
  console.log(storeBooks, wishList);
  const [filterWishlist, setFilterWishlist] = useState(wishList);
  useEffect(() => {
    if (shortingType) {
      if (shortingType === "pages") {
        console.log(shortingType);
        const sortData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortData, "sdjkfhfirwu");
        setFilterWishlist(sortData);
      } else if (shortingType === "rating") {
        const sortData = [...wishList].sort((a, b) => a.rating - b.rating);
        console.log(sortData, "sdjkfhfirwu");
        setFilterWishlist(sortData);
      }
    }
  }, [shortingType, wishList]);
  if (filterWishlist.length === 0) {
    return (
      <div className="h-[50vh] mx-auto py-10 bg-gray-200  text-center font-bold text-2xl justify-center">
        <h2>No Wish List data</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {filterWishlist.map((book) => (
        <BookCard book={book}></BookCard>
      ))}
    </div>
  );
};

export default ListedWish;
