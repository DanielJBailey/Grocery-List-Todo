import React from 'react';


const Item = ({id, name, quantity, bought, buy}) => (
    <li onClick={() => buy(id)} style={bought ? { ...styles.item, ...styles.bought } : styles.item }>
        <p>{name} ({ quantity })</p>
    </li>
)

const styles = {
    item: {cursor: 'pointer'},
    bought: {textDecoration: 'line-through'}
}

export default Item;