import React from 'react'

import './UserOutput.css'

const UserOutput = (props) =>{
    return(
        <div>
            <p>Username: {props.userName}</p>
            <p>De text wordt overschreven</p>
        </div>
    );
}

export default UserOutput;