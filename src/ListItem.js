import React from 'react';
import {BsTrash} from 'react-icons/bs';

const ListItem = ({item, handleCheck, handleDelete}) => {
  return ( 
    <li className='list-item'>
      <input 
        type="checkbox" 
        className='item-checkbox'
        checked={item.checked} 
        onChange={() => handleCheck(item.id)}
      />
      <p 
        className='item-content' 
        style={item.checked ? {textDecoration: "line-through"} : null} 
        onDoubleClick={() => handleCheck(item.id)}
      >{item.content}</p>
      <BsTrash 
        className='item-btn' 
        role="button" 
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
}

export default ListItem;