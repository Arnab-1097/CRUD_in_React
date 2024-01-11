import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("https://643fe7b7b9e6d064be0228bd.mockapi.io/userdata", { "name": name, "email": email })
  }

  /*const showpopup = () => {
    console.log("abcd")
    return(
    <div className="alert alert-primary" role="alert">
      A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    )
  }*/



  return (
    <>
      <Link to="/users" className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary" >View Users</button>
      </Link>

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-primary">Name</label>
          <input type="text" className="form-control y" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />
          
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-primary">Email address</label>
          <input type="email" className="form-control y" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />

        </div>



        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        <> </>
        <Link to="/"><button className="btn btn-secondary">Home</button></Link>


      </form>
    </>
  )
}
