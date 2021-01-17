import React, { Component } from 'react'

export default class NewItemForm extends Component {
    state = {
        items: [{product_name: "", qty: 0, units: ""}]
    }

    handleChange = event => {
        if (["product_name", "qty", "units"].includes(event.target.className)) {
            let items = [...this.state.items]
            items[event.target.dataset.id][event.target.className] = event.target.value
            this.setState({ items })
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    render() {
        let items = this.state.items
        return (
            <div className="user-info-content">
                {items.map((val, idx) => {
                            let itemID = `item-${idx}`, qtyID = `qty-${idx}`, unitsID = `units-${idx}`
                            return(
                                <fieldset key={idx}>
                                    <legend>Item #{idx + 1}</legend>
                                    <label htmlFor={itemID}>Product Name</label>
                                    <input
                                        type="text"
                                        name={itemID}
                                        className="product_name"
                                        id={itemID}
                                        data-id={idx}
                                        value={items[idx].product_name}
                                        onChange={this.handleChange}
                                    />
                                </fieldset>
                            )
                })}
            </div>
        )
    }
}
