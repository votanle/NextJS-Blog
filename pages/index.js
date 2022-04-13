import { db } from '../firebase'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import firebase from'firebase/app'


export default function Home() {
  const [userBlogs, setUserBlogs] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect( () => {
    const getAllUserBlogs = db.collectionGroup('blog')
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
      let userBlogs = []
      snapshot.forEach((doc) => {
        userBlogs.push({
          uid: doc.ref.parent.parent.id,
          upid: doc.id,
          data: { title: doc.data().title, content: doc.data().content },
        })
      })
      setUserBlogs(userBlogs)
    })

}, [])

useEffect(() => {
  if (!userBlogs.length){
    return
  }
  
    const getAllUser = db.collection('users').get().then((querySnapshot) =>{
     let users = []
     querySnapshot.forEach((doc) => {
       users.push({
         id: doc.id,
         name: doc.data().name,
       })

     })
     return Promise.resolve(users)
   })
   getAllUser.then((users)=> {
    let uids = userBlogs.map((userBlogs) => {
      return userBlogs.uid
    })
    let resultUser = users.filter((user) => {
      return uids.includes(user.id)
    })
    let userBlogList = []
    userBlogs.map((blog) => {
      const users = resultUser.find((u) => {
        return u.id === blog.uid
      })
      userBlogList.push({
        id: blog.upid,
        author: users.name,
        title: blog.data.title,
        content: blog.data.content,
      })
    })
    setBlogs(userBlogList)
   })
return getAllUser
}, [userBlogs])

  return (
    <div className="center">
     {blogs.map((blog) => (
      <div className="card" key={blog.id}>
             <div>
               <h1 className="card-title card #ffc107 amber">Title: {blog.title}</h1>
             </div>
             <div className="card-content">
             
               <p>{blog.content}</p>

             </div >
             <div className="format">
               <h5 className=" #aeea00 lime accent-4">Author: {blog.author}</h5>
             </div>
            
           </div>
     ))}
      <style jsx>
        {`    
              .card{
                max-width:500px;
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


