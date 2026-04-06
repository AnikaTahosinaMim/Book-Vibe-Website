const getAllreadListfromLocal = () => {
  const allRaedList = localStorage.getItem("readList");
  //   console.log(allRaedList, "nebgri");
  if (allRaedList) return JSON.parse(allRaedList);
  return [];
};

const ReadListLocalstorage = (book) => {
  const allBooks = getAllreadListfromLocal();
  const isAlreadyExsis = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExsis) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

export { getAllreadListfromLocal, ReadListLocalstorage };
