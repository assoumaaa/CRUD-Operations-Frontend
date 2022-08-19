import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import './GetAllCustomers.scss'
import './Popup.scss'
import { FiEdit, FiX } from "react-icons/fi";
import { AddingCustomer } from '../addingCustomer/AddingCustomer';
import { EditingCustomer } from '../editingCustomer/EditingCustomer';




export default function GetAllCustomers() {

    const [addingPopup, setAddingPopup] = useState(false);
    const [editingPopup, setEditingPopup] = useState(false);
    const [selectedID, setSelectedID] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [cookies, setCookie] = useCookies();
    const url = `api/customers`



    const toggleAddingPopup = () => {
        setAddingPopup(!addingPopup);
    };

    const toggleEditingPopup = (id) => {
        setEditingPopup(!editingPopup);
        setSelectedID(id);
    };

    const deleteCustomer = async (id) => {
        const url = `api/customers/${id}`
        await axios.delete(url,
            {
                headers: { "Authorization": `Bearer ${cookies.jwt}` }
            })
            .then(() => console.log('Delete successful'));
    }

    useEffect(() => {
        const allCustomers = async () => {
            await axios.get(url, { headers: { "Authorization": `Bearer ${cookies.jwt}` } })
                .then(res => {
                    setCustomers(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        allCustomers();
    })


    return (
        <div className="allCustomers">
            <div className="titles">
                <span>Customer ID</span>
                <span>Name</span>
                <span>Add/Delete</span>
            </div>
            {customers.map(cs => (
                <div className="data">
                    <span className='id'>{cs.customer_ID}  </span>
                    <span className='name'> {cs.firstName + " "}{cs.lastName}</span>
                    <span>
                        <FiEdit className='icons' onClick={() => toggleEditingPopup(cs.customer_ID)} />
                        <FiX className='icons close' onClick={() => deleteCustomer(cs.customer_ID)} />
                    </span>
                </div>
            ))}
            <button className='add' onClick={toggleAddingPopup} > ADD </button>
            {addingPopup && (
                <AddingCustomer popup={addingPopup} setPopup={setAddingPopup} />
            )}
            {editingPopup && (
                <EditingCustomer popup={editingPopup} setPopup={setEditingPopup} id={selectedID} />
            )}
        </div>
    )
}
