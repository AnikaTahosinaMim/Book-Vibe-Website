const getAllWishListfromLocal = () => {
  const allWishList = localStorage.getItem("wishList");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};

const WishLocal = (book) => {
  const allBooks = getAllWishListfromLocal();

  const isExist = allBooks.find((bk) => bk.bookId === book.bookId);

  if (!isExist) {
    allBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allBooks));
  }
};

export { getAllWishListfromLocal, WishLocal };