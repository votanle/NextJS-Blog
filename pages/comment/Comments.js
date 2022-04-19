import React from 'react'
import { useState } from 'react'
import {db, serverTimestamp} from '../../firebase'

export default function Comments({commentUId, postId}) {

    const [contentComments, setContentComments] = useState([])

    const handleSubmitComment = (e) => {
      e.preventDefault()
        db.collection('comments').doc(postId).collection('postComments').add({
            contentComments: contentComments,
            createdAt: serverTimestamp(),
            usersRef: db.doc(`users/${commentUId.uid}`)
        })
        alert ('Successfully!!!')
        setContentComments('')
    }


    return (
        <div className="center">
        <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                <textarea
                type="text"
                value={contentComments}
                placeholder="Comments Here !!!"
                onChange={(e) => setContentComments(e.target.value)}
            />
                </div>
              </div>
            </form>
          </div>
          <button className="btn waves-effect waves-light #fb8c00 orange darken-1" type="submit" name="action" onClick={(e) => handleSubmitComment(e)}>Submit
            <i className="material-icons right">send</i>
          </button>
          </div>
    )
}
