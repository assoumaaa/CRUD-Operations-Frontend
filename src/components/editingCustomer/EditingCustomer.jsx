import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import axios from 'axios'

export const EditingCustomer = ({ popup, setPopup, id }) => {


    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [cookies, setCookie] = useCookies();


    const url = `api/customers/${id}`
    const editCustomer = async(e) => {
        e.preventDefault();
        await axios.put(url, {
            customer_ID: 0,
            firstName: firstName,
            lastName: lastName
        }, {
            headers: { "Authorization": `Bearer ${cookies.jwt}` }
        })
        setFirstName(' ');
        setLastName(' ');
    }


    const togglePopup = () => {
        setPopup(!popup);
    };

    return (
        <div className="modal">
            <div onClick={togglePopup} className="overlay"></div>
            <div className="modal-content">
                <form>
                    <h1>Edit Customer!</h1>
                    <div className="input-box">
                        <input placeholder='First Name..' type="text" required="required" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input placeholder='Last Name..' type="text" required="required" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="button-box">
                        <button onClick={editCustomer}>ADD</button>
                    </div>
                </form>
                <button className="close-modal" onClick={togglePopup}>
                    x
                </button>
            </div>
        </div>
    )
}
