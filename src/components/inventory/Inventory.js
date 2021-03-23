import React, { Component } from 'react';
import NewItemForm from './NewItemForm';
import "../../stylesheets/logs/inventory.css";
import Loading from '../static/Loading';
import { FaPen, FaTrash } from 'react-icons/fa';

export default class Inventory extends Component {
    state = {
        id: undefined,
        product_name: "",
        quantity: "",
        unit_of_measurement: ""
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
        const { product_name, quantity, unit_of_measurement } = this.props.items.find(item => item.id === parseInt(id))
        if (this.state.id) {
            this.setState({
                id: undefined,
                product_name: "",
                quantity: "",
                unit_of_measurement: ""
            })
        } else {
            this.setState({ 
                id: id,
                product_name: product_name,
                quantity: quantity,
                unit_of_measurement: unit_of_measurement
            })
        }
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        this.props.updateItem(this.state)
        this.setState({
            id: undefined,
            product_name: "",
            quantity: "",
            unit_of_measurement: ""
        })
    }

    handleDelete = itemID => {
        if (window.confirm("Are you sure? This action cannot be undone.")) {
            this.props.removeItem(itemID)
        }
    }

    tableBody = items => {
        const tabledata = items.map(item => {
            return(
            this.state.id == item.id ? 
            <tr key={item.id} id={item.id}>
                <td><input type="text" className="item-input" name="product_name" onChange={this.handleChange} defaultValue={item.product_name}/></td>
                <td><input type="number" min="0" step="0.1" max="100" className="item-input" name="quantity" onChange={this.handleChange} defaultValue={item.quantity} /></td>
                <td><input type="text" className="item-input" name="unit_of_measurement" onChange={this.handleChange} defaultValue={item.unit_of_measurement} /></td>
                <td>
                    <button className="save" onClick={this.handleSubmit}>Save</button>
                    <button className="cancel" onClick={this.toggleEdit}>Cancel</button>
                </td>
            </tr>
            :
            <tr key={item.id} id={item.id}>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.unit_of_measurement}</td>
                <td>
                <button className="delete-info" onClick={() => this.handleDelete(item.id)}>
                    <FaTrash />
                </button>
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
