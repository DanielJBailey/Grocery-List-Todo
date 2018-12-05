import React from 'react';
import '../Styles/NewItem.scss';


class NewItem extends React.Component {
    state = { 
        name: '',
        quantity: 0
    }

    updateItem = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    updateQuantity = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state.name, this.state.quantity);
        this.setState({ name: '', quantity: 0 })
    }

    render() {
        const { name, quantity } = this.state;
        return(
            <form onSubmit={this.handleSubmit} className="new-item">
                <input 
                    value= {name}
                    placeholder = "Add Item:"
                    required
                    onChange = {this.updateItem}
                    name="name" 
                />
                <input
                    type="number"
                    max= "100"
                    min= "1"
                    value={quantity}
                    placeholder = "Quantity:"
                    required
                    pattern ="[0-9]+"
                    onChange={this.updateQuantity}
                    name="quantity"
                />
                <input
                    value="Add Item"
                    type="submit"
                />
            </form>
        );
    }
}

export default NewItem;