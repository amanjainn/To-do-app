import React, { Component } from 'react';
import './App.css';
import  List from './ListItem'
export default class App extends Component {

    state ={
        items:[],
        currentItem :{
            text: '',
            key: ''
        }
    }


    handleInput=(e)=>{
        this.setState({
            currentItem :{
                text: e.target.value,
                key : Date.now()
            }
        })
    }
     
    addItem=(e)=>{
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text!=='')
        {
            const newItems=[...this.state.items,newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text: '',
                    key: ''
                }
            })
        } }

    render() {
        return (
            <>
            
            <div className="body-app container bg-dark mt-5 pt-2 pb-5">
              <form className="form-group" onSubmit={this.addItem}>
                  <label className="display-6 text-light">Add a new Task</label>
                  <input type="text" value={this.state.currentItem.text} onChange={this.handleInput} className="form-control"></input>
                  <button type="submit" className="btn mt-2 btn-primary">Add task</button>
              </form>
                <List items={this.state.items}/>
                
            </div>

            </>
        )
    }
}
