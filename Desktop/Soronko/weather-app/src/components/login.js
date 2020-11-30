import React, {useState} from 'react'

function Login() {
    const [name, setName] = useState('')

    const handleName = (e)=> {
        setName(e.target.value)
        console.log(name)
    };

    return (
        <div className='body'>
            <h1 className= 'header'>Welcome, Please Login!
            </h1>
            <br></br> 
            <br/>
            <label>Username:</label><br/>
                <input type="text" onChange={handleName}/><br></br>

                <label>Password:</label><br/>
                <input type="password"/><br/><br/>
                <button className = 'button'>
                    login
                </button>
                    </div>
    )
}

export default Login
