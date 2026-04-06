import React, { useContext } from 'react';
import { ReadBookContext } from '../context/BookContext';

const Bookspage = () => {
     const { storeBooks } = useContext(ReadBookContext);
      console.log( storeBooks);
    return (
        <div>
            <h2>Bookspages</h2>
            
        </div>
    );
};

export default Bookspage;