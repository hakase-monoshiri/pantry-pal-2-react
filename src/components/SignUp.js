import React, { useState } from 'react'

export default function SignUp() {

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
    

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setState( prevState => ({...prevState, [key]: value}) )
    console.log(state)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state)
   
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>

          <label>
            Name:
            <br/>
            <input type="text" value={state.name} name='name'  onChange={handleInput} />
          </label>

          <br/>

          <label>
            Email:
            <br/>
            <input type="text" value={state.email} name='email' onChange={handleInput} />
          </label>

          <br/>

          <label>
            Password:
            <br/>
            <input type="password" value={state.password} name='password'  onChange={handleInput} />
          </label>

          <br/>

          <label>
            Password Confirmation:
            <br/>
            <input type="password" value={state.passwordConfirmation} name='passwordConfirmation' onChange={handleInput} />
          </label>

          <p> Or Sign in with google:</p>

          <input type='submit' value='Submit'></input>


        </form>
    </div>
  )
  
}
