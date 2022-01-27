import React from 'react';
import {MdAddBox} from 'react-icons/md';
import { useState } from 'react';

const AddItem = ({items, setItems}) => {
  const [newItem, setNewItem] = useState("");

  const addNewItem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const content = newItem;
    const newItemObj = {
      id, 
      content,
      checked: false
    }
    const newList = [...items, newItemObj];

    setItems(newList);
    localStorage.setItem('grocery_list', JSON.stringify(newList));
    setNewItem("");
  };

  return ( 
    <div className='addItem' >
      <input 
        type="text" 
        placeholder='Enter a new item' 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}
      />
      <button 
        className='addBox'
        onClick={() => addNewItem()}
      >
        <MdAddBox />
      </button>
    </div>
  );
}

export default AddItem;