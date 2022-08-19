import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import axios from 'axios'

export const AddingCustomer = ({ popup, setPopup }) => {


    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [cookies, setCookie] = useCookies();


    const url = `api/customers`
    const postData = async(e) => {
        e.preventDefault();
        await axios.post(url, {
            customer_ID: 0,
            firstName: firstName,
            lastName: lastName
        }, {
            headers: { "Authorization": `Bearer ${cookies.jwt}` }
        })
        console.log("sent succesfully..");
        setFirstName("");
        setLastName("");
    }

    const togglePopup = () => {
        setPopup(!popup);
    };

    return (
        <div className="modal">
            <div onClick={togglePopup} className="overlay"></div>
            <div className="modal-content">
                <form>
                    <h1>Add Customers!</h1>
                    <div className="input-box">
                        <input placeholder='First Name..' type="text" required="required" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input placeholder='Last Name..' type="text" required="required" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="button-box">
                        <button onClick={postData}>ADD</button>
                    </div>
                </form>
                <button className="close-modal" onClick={togglePopup}>
                    x
                </button>
            </div>
        </div>
    )
}
