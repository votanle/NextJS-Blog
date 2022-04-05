import {useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {storage,db,serverTimestamp} from '../firebase'

export default function createblog({user}) {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    useEffect(()=>{      
            try{
                 db.collection('blogs').add({
                  title,
                  content,
                  postedBy:user.uid,
                  createdAt:serverTimestamp()
              })
              M.toast({html: 'Blog Created',classes:"green"})   
            }catch(err){
                M.toast({html:'error creating blog',classes:"red"})    
            }
              

    },[])

    const SubmitDetails = ()=>{
        if (!title || !content){
            M.toast({html: 'please add all the fields',classes:"red"})    
            return
        }
       (error) => {
        M.toast({html: error.message,classes:"red"}) 
       }, 
       () => {
       
         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
           console.log('File available at', downloadURL);
           setUrl(downloadURL)
            
         });
       }


    }
    return (
        <div className="input-field rootdiv">
            <h3>Create A Blog !!</h3>
            <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e)=>setTitle(e.target.value)}
            
            />
            <textarea
             type="text"
             value={content}
             placeholder="content"
             onChange={(e)=>setContent(e.target.value)}
            
            />
             <button className="btn #fb8c00 orange darken-1" onClick={()=>SubmitDetails()}>Submit Post</button>

             <style jsx>
                 {`
                 
                 .rootdiv{
                     margin:30px auto;
                     max-width:600px;
                     padding:20px;
                     text-align:center;
                 }
                 `}
             </style>

        </div>
    )
}