import React from 'react';
import ReactDOM from 'react-dom/client';

function signUp(formData){
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(password);
}

export default function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor='password'>Password:</label>
        <input id="password" type="password" name="password"></input>
        <br />

        <button type='submit'>submit</button>
      </form>
    </section>
  )
}