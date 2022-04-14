import { useState } from 'react'
import Link from 'next/Link'
import {auth, db} from '../firebase'
import Router from 'next/Router'

var md5 = require('md5');
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dateofbirth, setDateofbirth] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !email|| !password){
            M.toast({html: 'please add all the fields',classes:"red"})    
            return
        }
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password)
            await result.user.updateProfile({
                 displayName:name
            })
            db.collection("users").doc(result.user.uid).set({
                name:name,
                email:result.user.email,
                dateofbirth:dateofbirth,
                createAt: new Date(),
                updateAt: new Date(),
                password: md5(password)
            })

       M.toast({html: `Welcome ${name}`,classes:"green"})
       Router.push('/') 
       }catch(err){
        M.toast({html: err.message,classes:"red"})    
       }

    }
  return (
    <div className="container center">
        <h3>Sign Up Form!</h3>
        <form onSubmit = {(e) => handleSubmit(e)}>
            <div className="input-field">
                <input type="text" placeholder="Full Name" value ={name} onChange ={e => setName(e.target.value)} />
                <input type="email" placeholder="Email" value ={email} onChange ={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value ={password} onChange ={e => setPassword(e.target.value)} />
                <input type="date" placeholder="dateofbirth" value ={dateofbirth} onChange ={e => setDateofbirth(e.target.value)} />

            </div>
            <button type="submit" className="btn #fb8c00 orange darken-1">Sign Up</button>
            <Link href="/login"><a><h5>Already have an account!</h5></a></Link>
        </form>
     
    </div>
  )
}
