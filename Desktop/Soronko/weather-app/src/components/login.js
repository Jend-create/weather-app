import React from 'react'
import useSessionStorage from './useSessionStorage'

function Login() {
    const [name, setName] = useSessionStorage('name', 'Jessy')

    const handleName = (e)=> {
        setName(e.target.value)
        console.log(name)
    };

    return (
        <div className='body'>
            <h1 className= 'header'>Welcome, Please Login!
            </h1>
            <br></br> 
            <form className="section-center">
            <br/>
            <label>Username:</label><br/>
                <input type="text" onChange={handleName}/><br></br>

                <label>Password:</label><br/>
                <input type="password"/><br/><br/>                
                <button className = 'button' onclick="lsRememberMe()">
                    login
                </button>
                <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember me</label>
                </form>
                    </div>
    )
}
export default Login
