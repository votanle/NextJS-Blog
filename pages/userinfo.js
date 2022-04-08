import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth, db, firebase } from '../firebase'

export default function userInfo() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dateofbirth, setDateofbirth] = useState('')
    const [users, setUsers] = useState([]);


    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix"
                            type="text"
                            // value={name}
                            // onChange={(e) => {
                            //     setUser({ ...user, name: e.target.value })
                            // }}
                            className="validate" />
                        <label for="icon_prefix">User Name</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_email"
                            type="email"
                            // value={email}
                            // onChange={(e) => {
                            //     setUser({ ...user, email: e.target.value })
                            // }}
                            className="validate" />
                        <label for="icon_email">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">date_range</i>
                        <input id="icon_date_range"
                            type="date"
                            // value={dateofbirth}
                            // onChange={(e) => {
                            //     setUser({ ...user, dateofbirth: e.target.value })

                            //  }}
                             className="validate" />
                        <label for="icon_date_range">DOB</label>
                    </div>
                </div>
            </form>
        </div>
    )

                            }
// export default userInfo