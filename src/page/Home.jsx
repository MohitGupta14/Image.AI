import React from 'react'
import { useState, useEffect } from 'react'
import { Loader, Card , FromField} from '..components'
const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  return (
    <div>Home</div>
  )
}

export default Home