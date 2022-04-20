import React from 'react'
import { useState } from 'react'
import { db } from '../../firebase'
import CommentsShow from '../comment/CommentsShow'
import Router from 'next/router'

export default function Comments({ commentUId, postId, userCurrentId }) {

  const [contentComments, setContentComments] = useState([])

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (!contentComments){
      M.toast({html: 'Please add all the fields!',classes:"red"})    
      return
  }
    try {
      db.collection('comments').doc(postId).collection('postComments').add({
        content: contentComments,
        createdAt: new Date(),
        userRef: db.doc(`users/${commentUId.uid}`)
      })
      M.toast({ html: 'Comment Successfully!', classes: "green" })
    } catch (err) {
      M.toast({ html: 'You must login before comment!', classes: "red" })
      Router.push('/login')
    }
    setContentComments('')
  }


  return (
    <div className="center">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                value={contentComments}
                placeholder="Comments Here !!!"
                onChange={(e) => setContentComments(e.target.value)}
              />
            </div>
            <button className="btn waves-effect waves-light #fb8c00 orange darken-1" type="submit" name="action" onClick={(e) => handleSubmitComment(e)}>Submit
              <i className="material-icons right">send</i>
            </button>
          </div>

        </form>
        <div>
          <CommentsShow postId={postId} commentUId={userCurrentId} />
        </div>
      </div>


    </div>
  )
}
