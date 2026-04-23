import React, { useEffect, useState } from 'react'

const FeatchDataEffect = () => {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await res.json();
        setPosts(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
    
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <div>
      <ul>
        {
          posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FeatchDataEffect