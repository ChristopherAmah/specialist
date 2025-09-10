import React from 'react'
import BlogBanner from '../components/BlogBanner'
import BlogCategory from '../components/BlogCategory'
import BlogPosts from '../components/BlogPosts'

const Home = () => {
  return (
    <>
      <BlogBanner />
      <BlogCategory />
      <BlogPosts />
    </>
  )
}

export default Home