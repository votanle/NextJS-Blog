import { db } from '../firebase'
import { useState, useEffect } from 'react'
import ShowPost from './posts/ShowPost'



export default function Home({ post, user }) {
  const [userPosts, setUserPosts] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collectionGroup('userPosts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        let userPosts = []
        snapshot.forEach((doc) => {
          userPosts.push({
            uid: doc.ref.parent.parent.id,
            upid: doc.id,
            data: {
              title: doc.data().title,
              content: doc.data().content,
              createdAt: doc.data().createdAt.toDate().toDateString(),
              createAtTime: doc.data().createdAt.toDate().toLocaleTimeString("en-US")
            },
          })
        })
        setUserPosts(userPosts)
      })

  }, [])

  useEffect(() => {
    if (!userPosts.length) {
      return
    }

    const getAllUsers = db.collection('users').get().then((querySnapshot) => {
      let users = []
      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          name: doc.data().name,
        })

      })
      return Promise.resolve(users)
    })
    getAllUsers.then((users) => {
      let uids = userPosts.map((userPost) => {
        return userPost.uid
      })
      let resultUser = users.filter((user) => {
        return uids.includes(user.id)
      })
      let userPostList = []
      userPosts.map((post) => {
        const users = resultUser.find((user) => {
          return user.id === post.uid
        })

        userPostList.push({
          id: post.upid,
          author: users.name,
          title: post.data.title,
          content: post.data.content,
          createdAt: post.data.createdAt,
          createAtTime: post.data.createAtTime,
        })
      })
      setPosts(userPostList)
    })

  }, [userPosts])

  return (
    <div className="center">

      {posts.map((post) => (
        <div className="card" key={post.id}>
          <ShowPost post={post} user={user} />
          
        </div>
      ))}
      <style jsx>
        {`    
              .card{
                max-width:700px;
                margin:22px auto;
              }
              p{
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
             `}
      </style>
    </div>
  )
}


