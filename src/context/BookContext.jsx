import React, { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const ReadBookContext = createContext();

const BookContext = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const bookContext = useContext(ReadBookContext);
  console.log(bookContext);
  const handleMarksAsRead = (currentBook) => {
    console.log("click", currentBook);
    const isExsists = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExsists) {
      toast.error("bookd already here");
      return;
    } else {
      setStoreBooks([...storeBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  };
  const handleWishList = (currentBook) => {
    const isExsistingReadList = storeBooks.map(
      (book) => book.bookId === currentBook.bookId,
    );
    if(isExsistingReadList){
      toast.error("already in readlist")
      return
    }

    console.log("click", currentBook);
    const isExsists = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExsists) {
      toast.error("bookd already here");
      return;
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  };
  const data = {
    storeBooks,
    setStoreBooks,
    handleMarksAsRead,
    setWishList,
    wishList,
    handleWishList

  };
  // console.log(handleMarksAsRead);
  return (
    <ReadBookContext.Provider value={data}>{children}</ReadBookContext.Provider>
  );
};

export default BookContext;
