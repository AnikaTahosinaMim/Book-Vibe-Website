import React, { useContext } from "react";
import { ReadBookContext } from "../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "../component/listlist/ListedBook";
import ListedWish from "../component/listlist/ListedWish";

const Bookspage = () => {
  const { storeBooks, wishList } = useContext(ReadBookContext);
  console.log(storeBooks, wishList);
  return (
    <div className="container mx-auto my-4">
      <Tabs>
        <TabList>
          <Tab>Read lsit</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedBook></ListedBook>
        </TabPanel>
        <TabPanel>
          <ListedWish></ListedWish>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Bookspage;
