const getAllreadListfromLocal = () => {
  const allRaedList = localStorage.getItem("readList");
  //   console.log(allRaedList, "nebgri");
  if (allRaedList) return JSON.parse(allRaedList);
  return [];
};

const ReadListLocalstorage = (book) => {
  const getAllreadListfromLocal = () => {
  const allRaedList = localStorage.getItem("readList");
  //   console.log(allRaedList, "nebgri");
  if (allRaedList) return JSON.parse(allRaedList);
  return [];
};
};

export { getAllreadListfromLocal, ReadListLocalstorage };
