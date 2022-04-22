import React from 'react'
import { useState, useEffect } from 'react'
import {db} from '../../firebase'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close';

export default function Follows({user}) {
const [dataSearch, setdataSearch] = useState([]) 
const [ userName, setuserName] = useState('') 
const [name, setName] = useState('')
const [wordEntered, setWordEntered] = useState("")
    // const handleSearch = async(e) => {
    //   e.preventDefault()
    //   await db.collection('users').doc(user.uid).get().then((doc) => {
    //       setName(doc.data().name),
    //   })  
  return (
    <div className="search blue-text">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search Users..."
          value={name}
          onChange={(e) => handleSearch(e.target.value.toLowerCase())}
        />
        <div className="searchIcon ">
        {dataSearch.length === 0 ? (
            <SearchIcon/>
           ) : ( 
            <CloseIcon id="clearBtn" onClick={clearInput} /> 
          )} 
        </div>
      </div>
      {/* {dataSearch.length != 0 && (
        <div className="dataResult">
          {dataSearch.slice(0, 15).map(() => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )} */}
    </div>
  )
}
