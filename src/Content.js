import React from 'react';
import AddItem from "./AddItem";
import ContentList from "./ContentList";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Content = ({items, setItems}) => {
  const [findItem, setFindItem] = useState("");

  return (
    <div className='content'>
      <AddItem 
        items={items} 
        setItems={setItems}
      />
      <SearchBar 
        findItem={findItem} 
        setFindItem={setFindItem}
      />
      <ContentList 
        items={items.filter(item => (item.content.toLowerCase()).includes(findItem.toLowerCase()))} 
        setItems={setItems} 
        findItem={findItem} 
        setFindItem={setFindItem}
      />
    </div>
  );
}

export default Content;