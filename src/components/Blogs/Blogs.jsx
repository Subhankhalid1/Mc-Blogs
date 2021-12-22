import React from 'react'
import './blog.css'
import BlogsList from './BlogsList/BlogsList'


const Blogs=()=>{


    return<div className="blogContainer">
    <div>
    <h2 className=" blogHead text-center pb-4 pt-4">Blog</h2>
    </div>
    <BlogsList/>
    </div>
}


 export default Blogs