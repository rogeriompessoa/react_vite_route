import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Logim = () => {
    const [logim, setLogim] = useState({});
    const navigate = useNavigate()

    const handleLogim =(event) => {
        event.preventDefalt()
        
        console.log("submit");

if(logim.email === "sdm@teste" && logim.senha === `123`) {
   console.log("vai para home");
   navigate("/")
}
else {
    alert(`usuario e senha invalido`)
}

}


    

    // const handleChange = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   setInputs(values => ({...values, [name]: value}))
    // }
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   alert(inputs);
    // }
  return (
    <div>
        <main className="form-signin w-100 m-auto">
    <form onSubmit={handleLogim}>
      <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div className="form-floating">
        <input 
        type="email"
         className="form-control"
          id="email"
           placeholder="name@example.com"
          
         value={logim.email || ""}/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" 
        className="form-control" 
        id="senha" 
        placeholder="Password"
        value={logim.senha ||""}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
  
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  </main></div>
  )
}
