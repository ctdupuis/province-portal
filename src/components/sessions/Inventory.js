import React, { Component } from 'react';

export default class Inventory extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    state = {
        localItems: [{product_name: "", qty: 0, units: ""}]
    }

    tableHeaders = () => {
        return(
            <thead>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Of Measurement</th>
            </thead>
        )
    }

    tableBody = items => {
        const tabledata = items.map(item => {
            return(<tr>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.unit_of_measurement}</td>
            </tr>)
        })
        return(
            <tbody>
                {tabledata}
            </tbody>
        )
    }

    handleChange = event => {
        if (["product_name", "qty", "units"].includes(event.target.className)) {
            let localItems = [...this.state.localItems]
            localItems[event.target.dataset.id][event.target.className] = event.target.value
            this.setState({ localItems })
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    render() {
        let localItems = this.state.localItems
        const items = this.props.items
        const shippingItems = items.filter(item => item.category === "Shipping Supplies")
        const cleaningItems = items.filter(item => item.category === "Cleaning Supplies")
        return (
            <section className="dash-container">
                <div className="dash-content">
                    {/* <div className="user-info-title">
                        <h3>Add A New Item</h3>
                    </div> */}
                    <div className="user-info-content">
                        {localItems.map((val, idx) => {
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
                                        value={localItems[idx].product_name}
                                        onChange={this.handleChange}
                                    />
                                </fieldset>
                            )
                        })}
                    </div>
                    <div class="user-info-title">
                        <h3>Shipping Supplies</h3>
                    </div>
                    <table className="contact-list">
                        {this.tableHeaders()}
                        {this.tableBody(shippingItems)}
                    </table>

                    <div className="user-info-title">
                        <h3>Cleaning Supplies</h3>
                    </div>
                    <table className="contact-list">
                        {this.tableHeaders()}
                    </table>
                </div>
            </section>
        )
    }
}
