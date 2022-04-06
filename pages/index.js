import {db} from '../firebase'
import {useState} from 'react'
import { createblog } from '../pages/createblog'

export default function Home({ Allposts, user }) {
  const [posts, setposts] = useState(Allposts)
  const [end, setEnd] = useState(false)
  const loadMore = async () => {
    const last = posts[posts.length - 1]
    const res = await db.collection('posts')
      .orderBy('createdAt', 'desc')
      .startAfter(new Date(last.createdAt))
      .limit(6)
      .get()
    const newposts = res.docs.map(docSnap => {
      return {
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt.toMillis(),
        id: docSnap.id
      }
    })
    setposts(posts.concat(newposts))
    if (newposts.length < 3) {
      setEnd(true)
    }
  }
  
    return (
      <div className="center">
          {posts.map(post=>{
            return(
              <div className="card" key={post.createdAt}>
              <div className="card-image">
                <span className="card-title">{post.title}</span>
              </div>
              <div className="card-content">
                <p>{post.content}</p>
              </div>
              {/* <div className="card-action">
                <Link href={`/posts/${post.id}`}><a>Read More</a></Link>
              </div> */}
            </div>
        )
      })}
      {end == false ?
        <button className="btn #FB8C00 blue darken-1" onClick={() => loadMore()}>Load more</button>
        : <h4 className='show_end'>End</h4>
      }

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
  const querySnap = await db.collectionGroup('posts').orderBy('createdAt', "desc")
    .get()
  const Allposts = querySnap.docs.map(docSnap => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id
    }
  })
  return {
    props: { Allposts }, // will be passed to the page component as props
  }
}

