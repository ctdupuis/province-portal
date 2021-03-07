import React, { Component } from 'react';
import NewItemForm from './NewItemForm';
import "../../stylesheets/logs/inventory.css";
import Loading from '../static/Loading';
import { FaPen } from 'react-icons/fa';

export default class Inventory extends Component {
    state = {
        activeEdit: undefined
    }

    componentDidMount() {
        this.props.getItems();
    }

    tableHeaders = () => {
        return(
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit Of Measurement</th>
                </tr>
            </thead>
        )
    }

    toggleEdit = event => {
        const id = event.currentTarget.dataset.id
        if (this.state.activeEdit) {
            this.setState({
                ...this.state,
                activeEdit: undefined
            })
        } else {
            this.setState({ activeEdit: id })
        }
        // debugger
    }

    tableBody = items => {
        const tabledata = items.map(item => {
            return(
            this.state.activeEdit == item.id ? 
            <tr key={item.id} id={item.id}>
                <td><input name="product_name" defaultValue={item.product_name}/></td>
                <td><input name="quantity" defaultValue={item.quantity} /></td>
                <td><input name="unit_of_measurement" defaultValue={item.unit_of_measurement} /></td>
                <button>Save</button>
                <button onClick={this.toggleEdit}>Cancel</button>
            </tr>
            :
            <tr key={item.id} id={item.id}>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.unit_of_measurement}</td>
                <td>
                <button data-id={item.id} className="edit-info" onClick={this.toggleEdit}>
                  <FaPen />
                </button>
                </td>
            </tr>
            )
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
        const officeItems = items.filter(item => item.category === "Office Supplies")
        const loading = this.props.loading
        return (
            loading ? <Loading /> :
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title">
                        <h3>Add An Item</h3>
                    </div>
                    <NewItemForm addItems={this.props.addItems} />
                    <div className="user-info-title">
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
                        {this.tableBody(cleaningItems)}
                    </table>

                    <div className="user-info-title">
                        <h3>Office Supplies</h3>
                    </div>
                    <table className="contact-list">
                        {this.tableHeaders()}
                        {this.tableBody(officeItems)}
                    </table>
                </div>
            </section>
        )
    }
}
