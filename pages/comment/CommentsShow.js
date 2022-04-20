import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'


export default function commentsShow({ postId }) {
  const [postComments, setpostComments] = useState([])

  useEffect(() => {
    const getComments = db.collection(`comments/${postId}/postComments`)
      .orderBy('createdAt', 'desc')
      .onSnapshot(async (querysnapshot) => {
        let comments = []
        querysnapshot.forEach((doc) => {
          comments.push({
            id: doc.id,
            data: doc.data(),
            // createdAt: doc.data().createdAt.toDate().toDateString(),
            // createAtTime: doc.data().createdAt.toDate().toLocaleTimeString("en-US")
          })
        })
        const Allcomment = await Promise.all(
          comments.map(async (comment) => {
            const UserComment = {
              id: comment.id,
              content: comment.data.content,
              author: (
                await db.doc(comment.data.userRef.path).get()
              ).data().name,
              // createdAt: comment.data.createdAt,
              // createAtTime: comment.data.createAtTime,
            }
            return UserComment
          })
        )
        setpostComments(Allcomment)
        return Allcomment
      })
    return getComments
  }, [postId])

  return (
    <div className="center">
      <div className="left-align rootdiv">

        {postComments.map((comment) => (
          <h6 key={comment.id}><b>{comment.author}:</b> {comment.content}</h6>

        ))}
      </div>
      <style jsx>
        {`
              p{
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
                 .rootdiv{
                     margin:30px auto;
                     max-width:600px;
                     padding:20px;
                    
                 }
                 `}
      </style>
    </div>

  )
}


