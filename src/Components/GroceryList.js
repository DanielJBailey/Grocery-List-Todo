import React from 'react';
import '../Styles/GroceryList.scss';
import Item from '../Components/Item';

const GroceryList = ({items}) => (
    <>
        <h1>Grocery List</h1>
        <ul>
            { items.map( item => <Item key={item.id} {...item}/> )}
        </ul>
    </>
)

export default GroceryList;