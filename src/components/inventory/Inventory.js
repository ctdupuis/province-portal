import React, { Component } from 'react';
import NewItemForm from './NewItemForm';
import "../../stylesheets/logs/inventory.css"

export default class Inventory extends Component {
    componentDidMount() {
        this.props.getItems();
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

    render() {
        const items = this.props.items
        const shippingItems = items.filter(item => item.category === "Shipping Supplies")
        const cleaningItems = items.filter(item => item.category === "Cleaning Supplies")
        return (
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title">
                        <h3>Add An Item</h3>
                    </div>
                    <NewItemForm />
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
