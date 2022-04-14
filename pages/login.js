import { useState } from 'react'
import Link from 'next/Link'
import { auth } from '../firebase'
import Router from 'next/router'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            M.toast({ html: 'please add all the fields', classes: "red" })
            return
        }
        try {
            await auth.signInWithEmailAndPassword(email, password)
            M.toast({ html: `Welcome Back!`, classes: "green" })
            Router.push('/')
        } catch (err) {
            M.toast({ html: err.message, classes: "red" })
        }
    }
    return (
        <div className="container center">
            <h3>Login Form!</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-field">
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn #fb8c00 orange darken-1">Login</button>
                <Link href="/signup"><a><h5>Don't Have an account?</h5></a></Link>
            </form>

        </div>
    )
}
