import React, { Component } from 'react';

export default class NewItemForm extends Component {
    state = {
        items: [{product_name: "", qty: 0, units: "", category: ""}]
    }

    handleChange = event => {
        if (["product_name", "qty", "units", "category"].includes(event.target.className)) {
            let items = [...this.state.items]
            items[event.target.dataset.id][event.target.className] = event.target.value
            this.setState({ items })
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    addItem = event => {
        event.preventDefault();
        this.setState((prevState) => ({
            items: [...prevState.items, {product_name: "", qty: 0, units: ""}]
        }));
    }

    popItem = event => {
        event.preventDefault();
        let keepers = this.state.items.slice(0, this.state.items.length-1)
        this.setState({
            ...this.state,
            items: [...keepers]
        })
    }

    handleSubmit = event => {
        this.props.addItems(this.state)
        this.setState({
            items: [{product_name: "", qty: 0, units: "", category: ""}]
        })
    }

    render() {
        let items = this.state.items
        return (
            <div className="user-info-content">
                <div className="flex-container" style={{ flexWrap: "wrap"}}>
                    {items.map((val, idx) => {
                        let itemID = `item-${idx}`, qtyID = `qty-${idx}`, unitsID = `units-${idx}`, categoryID = `category-${idx}`
                        return(
                            <fieldset id="new-item" key={idx}>
                                <legend>Item #{idx + 1}</legend>

                                <div className="fieldset-flex">

                                    <div className="form-group">
                                        <label htmlFor={itemID}>Product Name</label>
                                        <input
                                            type="text"
                                            name={itemID}
                                            className="product_name"
                                            id={itemID}
                                            data-id={idx}
                                            value={items[idx].product_name}
                                            onChange={this.handleChange}
                                            required={true}
                                            />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor={qtyID}>Quantity</label>
                                        <input 
                                            type="number"
                                            name={qtyID}
                                            min="0"
                                            max="100"
                                            step="0.1"
                                            className="qty"
                                            id={qtyID}
                                            data-id={idx}
                                            value={items[idx].qty}
                                            onChange={this.handleChange}
                                            required={true}
                                            />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor={unitsID}>Unit of Measurement</label>
                                        <input
                                            type="text"
                                            name={unitsID}
                                            className="units"
                                            id={unitsID}
                                            data-id={idx}
                                            value={items[idx].units}
                                            onChange={this.handleChange}
                                            required={true}
                                            />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor={categoryID}>Item Type</label>
                                        <select
                                            id={categoryID}
                                            data-id={idx}
                                            name={categoryID}
                                            className="category"
                                            value={items[idx].category}
                                            onChange={this.handleChange}
                                            required={true}
                                            >
                                            <option>Select a category...</option>
                                            <option value="Shipping Supplies">Shipping Supplies</option>
                                            <option value="Cleaning Supplies">Cleaning Supplies</option>
                                            <option value="Office Supplies">Office Supplies</option>
                                        </select>
                                    </div>

                                </div>
                            </fieldset>
                        )
                    })}
                </div>

                <div className="flex-container">
                    <button className="green-btn" onClick={this.addItem}>
                        Add Another Item
                    </button>
                    <button className="green-btn" onClick={this.popItem}>
                        Remove Item
                    </button>
                    <button className="green-btn" onClick={() => this.handleSubmit(this.state)}>
                        Submit Item(s)
                    </button>
                </div>
            </div>
        )
    }
}
