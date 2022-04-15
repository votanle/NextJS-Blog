import { useState, useEffect } from 'react'
import Router from 'next/router'

import { db, serverTimestamp} from '../firebase'

export default function createblog({ user }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    

    const createPost = async (e) => {
        if (!title || !content){
            M.toast({html: 'please add all the fields',classes:"red"})    
            return
        }
        try {
            db.collection("posts").doc(user.uid).collection('userPosts').add({
             title,
             content,
             createdAt: serverTimestamp(),
             updatedAt: serverTimestamp(),
            })

            M.toast({ html: 'Blog Created', classes: "green" })
            Router.push('/')
                } catch (err) {
                    M.toast({ html: 'Error creating blog', classes: "red" })
                }
    }

    return (
        <div className="input-field rootdiv">
            <h3>Create A Blog !!</h3>
            <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}

            />
            <textarea
                type="text"
                value={content}
                placeholder="Content"
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="btn #fb8c00 orange darken-1" onClick={() => createPost()}>Submit Post</button>

            <style jsx>
                {`
                 
                 .rootdiv{
                     margin:30px auto;
                     max-width:600px;
                     padding:20px;
                     text-align:center;
                 }
                 `}
            </style>

        </div>
    )
}
