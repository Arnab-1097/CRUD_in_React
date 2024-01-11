import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Update() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"))
  }, []
  )


  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`https://643fe7b7b9e6d064be0228bd.mockapi.io/userdata/${id}`, { "name": name, "email": email })
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-primary">Name</label>
          <input type="text" className="form-control y" value={name} onChange={(e) => setName(e.target.value)} />

        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-primary">Email address</label>
          <input type="email" className="form-control y" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => handleUpdate(e)} >Update</button>

        <> </>

        <Link to="/users"><button type="button" className="btn btn-secondary">Back</button></Link>
      </form>
    </div>
  )
}
