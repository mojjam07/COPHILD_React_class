import React, { useState,useEffect } from 'react'
import axios from 'axios'


function FetchDataFromAPI() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <div>
        <ul>
          {posts.map(post =>(
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FetchDataFromAPI

// Steps of Data Fetching : axios

// 1. Install axios : npm install axios, check package.json for comfirmation
// 2. Create your component e.g current component
// 3. Import useState and useEffect from react
// 3. Import axios in your component
// 4. Use useEffect to fetch data from API