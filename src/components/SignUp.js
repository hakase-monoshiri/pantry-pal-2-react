import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/slices/userSlice';

export default function SignUp() {

  const dispatch = useDispatch()


  
  function handleCallbackResponse (response) {
    console.log(response.credential)
  }

  useEffect( () => {
    /*global google */
  
    google.accounts.id.initialize( {
      client_id: '429452142553-7v4pcin4pdukf5luem55l0s0o1i1linu.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme: 'outline', size: 'large'}
    )
  }, [] );


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
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(state))
   
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

        

          <input type='submit' value='Submit'></input>


        </form>

        <p> Or Sign in with google:</p>
        <div id='signInDiv'></div>
    </div>
  )
  
}
