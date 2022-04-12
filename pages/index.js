import { db } from '../firebase'
import { useState } from 'react'
import Link from 'next/link'
import firebase from'firebase/app'


export default function Home({ Allblogs }) {
  const [blogs, setblogs] = useState(Allblogs)
  return (
    <div className="center">
      {blogs.map(blog => {
        return (
          <div className="card" key={blog.createdAt}>
            <div>
              <h1 className="card-title card #ffc107 amber">Title: {blog.title}</h1>
            </div>
            <div className="card-content">
             
              <p>{blog.content}</p>

            </div >
            <div className="format">
              <h5 className=" #aeea00 lime accent-4">Author: {blog.author.name}</h5>
            </div>
            
          </div>
        )
      })}

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
export async function getServerSideProps(context) {
  const querySnap = await db.collectionGroup('blog').orderBy('createdAt', "desc")
    .get()
  const Allblogs = querySnap.docs.map(docSnap => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      updatedAt: docSnap.data().updatedAt.toMillis(),
      id: docSnap.id
    }
  })
  return {
    props: { Allblogs }, // will be passed to the page component as props
  }
}

// const loadMore = async () => {
  //   const last = blogs[blogs.length - 1]
  //   const res = await db.collection('blogs')
  //     .orderBy('createdAt', 'desc')
  //     .startAfter(new Date(last.createdAt))
  //     .get()
    // const newblogs = res.docs.map(docSnap => {
    //   return {
    //     ...docSnap.data(),
    //     createdAt: docSnap.data().createdAt.toMillis(),
    //     id: docSnap.id
    //   }
    // })
    // setblogs(blogs.concat(newblogs))
    // if (newblogs.length < 3) {
    //   setEnd(true)
    // }

