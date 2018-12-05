import React from 'react';
import '../Styles/GroceryList.scss';
import Item from '../Components/Item';

const GroceryList = ({items, bought}) => (
    <>
        <h1>Grocery List</h1>
        <div className="writing-container">
            <ul className="writing-lines">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                { items.map( item => <Item buy={bought} key={item.id} {...item}/> )}
            </ul>
        </div>
        
    </>
)

export default GroceryList;