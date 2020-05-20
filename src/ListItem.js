import React from 'react'
import FlipMove from 'react-flip-move'
import './App.css'


function ListItem(props){
    const items= props.items;
      

  const listItems =items.map(item =>{   
      return ( 
        <div className="card card-flex mb-2">
        <div className="card-list card-body" key={item.key}>
         {item.text}
         <i onClick={()=>props.deleteItem(item.key)} className="trash-icon fas fa-trash"></i>
        </div>
      </div>

      ) 
 }) 

 return(
<div><FlipMove duration={300} easing="ease-in-out">{listItems}</FlipMove></div>
 )
} 

export default ListItem;