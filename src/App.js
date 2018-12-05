import React, { Component } from 'react';
import GroceryList from './Components/GroceryList';
import NewItem from './Components/NewItem';
import './Styles/App.scss';

class App extends Component {
  state = {
    maxItems: 21,
    items: [
      {id: 1, name: "Oranges", quantity: "5", bought: false},
      {id: 2, name: "Bread", quantity: "1", bought: false},
      {id: 3, name: "Advocado", quantity: "2", bought: false},
      {id: 4, name: "Salmon Filets", quantity: "2", bought: false},
      {id: 5, name:  "Eggs", quantity: "20", bought: false},
      {id: 6, name:  "Cilantro", quantity: "1", bought: false},

    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addItem= (name, quantity) => {
    const item = { name, id: this.getUniqId(), quantity, bought: false};
    if(this.state.items.length < this.state.maxItems) {
      this.setState({
        items: [item, ...this.state.items]
      }, function () {
        console.log(this.state);
      });
    }
  }

  boughtItem = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map( item => {
        if(item.id === id) {
          return {
            ...item, bought: !item.bought
          }
        }
        return item
      })
    })
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
          <NewItem add={this.addItem}/>
          <div className="notepad">
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="hole"></div>
            <div className="lines"></div>
            <GroceryList items={items} bought={this.boughtItem}/>
          </div>
      </div>
    );
  }
}

export default App;
