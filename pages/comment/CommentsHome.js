import React from 'react'
import Comments from './Comments'
import CommentsHome from './CommentsShow'

export default function commentsHome({ postId, currentUser }) {
    return (
        <>
            <div>
                <Comments postId = { postId } commentUId = { currentUser}/>
                <CommentsHome postId = { postId } commentUId = { currentUser}/>
            </div>
        </>

    )
}
