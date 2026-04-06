// import React, { useContext, useState } from "react";
import { ReadBookContext } from "../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "../component/listlist/ListedBook";
import ListedWish from "../component/listlist/ListedWish";
import { useState } from "react";

const Bookspage = () => {
  // const { storeBooks, wishList } = useContext(ReadBookContext);
  // console.log(storeBooks, wishList);
  const [shortingType,setShortingType] = useState("")
  console.log(shortingType,'sjfhfkdvhdjbvk')
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Short By {shortingType} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=>setShortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setShortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto my-4">
        <Tabs>
          <TabList>
            <Tab>Read lsit</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <ListedBook shortingType={shortingType}></ListedBook>
          </TabPanel>
          <TabPanel>
            <ListedWish shortingType={shortingType}></ListedWish>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Bookspage;
