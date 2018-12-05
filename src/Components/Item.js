import React from 'react';


const Item = ({name, quantity}) => (
    <li>
        {name} ({quantity})
    </li>
)

export default Item;