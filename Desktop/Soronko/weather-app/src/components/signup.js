import React, {useState} from 'react'

function Signup() {
    const [name, setName] = useState('')

    const handleName = (e)=> {
        setName(e.target.value)
        console.log(name)
    };

    return (
        <div className= 'column'>
            <from>
            <h1> New User, Please Signup!</h1>
            <br/><br/>
            <br/>
            <label>Username:</label><br/>
                <input type="text" onChange={handleName}/><br></br>

                <label>Password:</label><br/>
                <input type="password"/><br/><br/>
                <label>Confirm Password:</label><br/>
                <input type="password"/><br/><br/>
                <button className = 'button'>
                    submit
                </button>
            </from>
            
        </div>
    )
}

export default Signup
