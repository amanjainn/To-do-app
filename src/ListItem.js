import React from 'react'
import './App.css'


function ListItem(props){
    const items= props.items;
    
  const listItems =items.map(item =>{   
      return (
        <div class="card to" >
        <ul class="list-group list-group-flush">
          <li class="list-group-item mb-3">{item.text}</li>
        </ul>
      </div>
      ) 
 }) 

 return <div>{listItems}</div>
} 

export default ListItem;