import React from 'react'
import {db} from '../firebase'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function comments({commentId}) {

    const [contentComments, setContentComments] = useState([])

    const handleSubmitComment = async (e) => {
        db.collection('comments').doc(commentId).collection('comment').add({
            contentComments: contentComments,
            createdAt: new Date()
        })
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
          <button className="btn waves-effect waves-light #fb8c00 orange darken-1" type="submit" name="action" onClick={() => handleSubmitComment()}>Submit
            <i className="material-icons right">send</i>
          </button>
          </div>
    )
}
