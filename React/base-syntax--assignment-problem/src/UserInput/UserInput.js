import React from 'react'

const UserInput = (props) =>{
    const style = {
        border: '2px solid blue'
    }
    return(
        <input 
        onChange={props.change}
        value={props.currentName}
        type='text'
        style={style}/>
    );
}

export default UserInput;