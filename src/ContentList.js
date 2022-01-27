import React from 'react';
import ListItem from "./ListItem";

const ContentList = ({items, setItems}) => {
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  return (
    <main>
      {items.length ? (
        <ul className='contentList'>
          {items.map((item) => (
            <ListItem 
              key={item.id} 
              item={item} 
              handleCheck={handleCheck} 
              handleDelete={handleDelete} 
            />
          ))}
        </ul>
        ) : (
        <p className='emptyList'>Your list is empty</p>
        )
      }
    </main>
  )
}

export default ContentList;