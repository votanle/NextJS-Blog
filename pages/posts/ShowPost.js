import React from 'react'
import Comments from '../comment/Comments'

export default function ShowPost({post, user}) {
  
  return (
    <div>
        <div>
            <h3> {post.title}</h3>
          </div>
          <div className="card-content">

            {post.content}

          </div >
          <div className="format">
            <h5>@{post.author}</h5>
          </div>
          <div className="format">
            <b>{post.createAtTime}, {post.createdAt}</b>
          </div>
          <div>
            <Comments postId = {post.id} commentUId = {user} />
          </div>
    </div>
  )
}
