import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Ui() {
    const [info, setInfo] = useState([])
    const [tablelight, settablelight] = useState('')



    const getData = () => {
        axios.get("https://643fe7b7b9e6d064be0228bd.mockapi.io/userdata").then((res) => {
            setInfo(res.data);

        });
    }

    const handleDelete = (id) => {
        axios.delete(`https://643fe7b7b9e6d064be0228bd.mockapi.io/userdata/${id}`).then(() => {
            getData();
        })

    }

    const setLocal = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email)


    }

    useEffect(()=>{
        getData()},[]);


    console.log(info)

    return (
        <>


            <Link to="/form"><button type="button" className="btn btn-primary">Create User</button></Link>
            <> </>


            <Link to="/"><button type="button" className="btn btn-secondary">Home</button></Link>

            <p className="x"></p>

            <div className="form-check form-switch x">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => {
                    if (tablelight === 'table-light') {
                        settablelight('')
                    }
                    else {
                        settablelight('table-light')
                    }
                }} />
                <> </>
                <p class="fs-6 font-monospace text-warning">Light Theme</p>
            </div>

            <table className={`table table-hover`}>
                <thead>
                    <tr>

                        <th scope="col" className="text-primary">ID</th>
                        <th scope="col" className="text-primary">Name</th>
                        <th scope="col" className="text-primary">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                {

                    info.map((eachinfo) => {
                        return (
                            <>


                                <tbody className={`${tablelight}`}>
                                    <tr>

                                        <td className="text-primary">{eachinfo.id}</td>
                                        <td className="text-primary">{eachinfo.name}</td>
                                        <td className="text-primary">{eachinfo.email}</td>
                                        <td><Link to="/update"><button type="button" className="btn btn-primary" onClick={() => setLocal(eachinfo.id, eachinfo.name, eachinfo.email)}>Edit</button></Link></td>

                                        <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(eachinfo.id)}>Delete</button></td>


                                    </tr>
                                </tbody>

                            </>
                        )
                    }
                    )
                }
            </table>

        </>
    )
}