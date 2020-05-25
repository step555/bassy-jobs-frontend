import React from "react"
import { Form } from "semantic-ui-react"

const Profile = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Profile Information</h1>
            <div className="profile-text-info">
                <h3>Name: {props.user.name}</h3>
                <h3>Address: {props.user.address}</h3>
                <h3>Phone: {props.user.phone_number}</h3>
                <h3>Email: {props.user.email}</h3>
                <button onClick={props.edit}> Edit Information </button>
            </div>
        </div>
    )
}

export default Profile