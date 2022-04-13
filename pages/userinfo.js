import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth, db } from '../firebase'
import 'firebase/firestore'


export default function userInfo({user}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dateofbirth, setDateofbirth] = useState('')

    useEffect(() => {
        db.collection("users").doc(user.uid).get().then((doc) => {
            setName(doc.data().name),
            setEmail(doc.data().email),
            setDateofbirth(doc.data().dateofbirth)
        })
    }, [])

    const handleSubmitUpdate = async (e) => {
        e.preventDefault()
        if (!name || !email|| !dateofbirth){
            M.toast({html: 'please add all the fields',classes:"red"})    
            return
        }
        
        db.collection("users").doc(user.id).update({
            name,
            email,
            dateofbirth,
            updatedAt: new Date(),
        })
        alert('Updated successfully')
    }

 
    
    return (
        <div className="row container center">
            <h4 className="container center">---PROFILE USER---</h4>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                    
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix"
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            className="validate" />
                       
                    </div> 
                   
                    <div className="input-field col s6">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_email"
                            type="email"
                            value={email}
                            className="validate" />
                    </div>
                    
                    <div className="input-field col s6">
                        <i className="material-icons prefix">date_range</i>
                        <input id="icon_date_range"
                            type="date"
                            value={dateofbirth}
                            onChange={(e) => {
                                setDateofbirth(e.target.value)

                            }}
                            className="validate" />
                        <label for="icon_date_range">DOB</label>
                    </div>
                </div>
                <button type="submit" className="btn #fb8c00 orange darken-1 " value="Update" onClick={handleSubmitUpdate}>Update</button>
            </form>
        </div>
    )

}
