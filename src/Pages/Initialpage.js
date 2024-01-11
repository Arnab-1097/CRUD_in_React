import React from 'react'


export default function Initialpage() {
    return (
        <>
            <nav>
                <h3 className="i text-success">WELCOME TO CRUD APPLICATION</h3>
                <ul className="nav z">
                    <li className="nav-item ">
                        <a className="nav-link active" href="/form">Create User</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/Users">View Users</a>
                    </li>


                </ul>
            </nav>

            <img src=".\Image\businessmen-working-strategic-planning.jpg" class="img-fluid" alt="."></img>
        </>

    )
}
