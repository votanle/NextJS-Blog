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
          })
        })
        const Allcomment = await Promise.all(
          comments.map(async (comment) => {
            const UserComment = {
              id: comment.id,
              content: comment.data.content,
              createdAt: comment.data.createdAt.toDate().toDateString(),
              createAtTime: comment.data.createdAt.toDate().toLocaleTimeString(),
              author: (
                await db.doc(comment.data.userRef.path).get()
              ).data().name,

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
          <div key={comment.id}>
            <h6><span>{comment.author} </span><b>@{comment.createAtTime}, {comment.createdAt}</b></h6>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <style jsx global>
        {`        b {
                    font-weight: 600;
                    font-size:12px;
                  }
                  span {
                    font-size:20px;
                    font-weight: 500;
                    color: orange;
                  }
                  p {
                    font-size: large;
                    text-indent: 24px;
                  
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


