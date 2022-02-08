import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;
    const history = useHistory();
    const friendStyle = {
        border: '1px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    const url = `/friend/${id}`;
    const handleFriendClick =() => {
        history.push(url);
    }
    return (
        <div style={friendStyle}>
            <h1>I am: {name}</h1>
            <h3>Phone: {phone}</h3>
            <p>My website: {website}</p>
            <p><small>My address is: {address.city}</small></p>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
            <button>Visit me</button>
            
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>

        </div>
    );
};

export default Friend;