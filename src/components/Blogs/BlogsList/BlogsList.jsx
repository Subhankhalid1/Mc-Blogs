import React from 'react'
import './bloglist.css'
import Pic from '../image/blogPic.png'

const BlogsList=()=>{
const arr=[
'WordPress vs Webflow','How to Block SPAM “bot- traffic” in GA','10 Best Business Plan Software',
'WordPress vs Webflow','How to Block SPAM “bot- traffic” in GA','10 Best Business Plan Software',
'WordPress vs Webflow','How to Block SPAM “bot- traffic” in GA','10 Best Business Plan Software'
          ]

    return<div class="container">
    <div class="flex">
    
      {
        arr.map((item, index)=><div className="p-2" key={index}>
        {/* <div class="content border border-dark d-flex flex-row" key={index}> 
        <a href="#"> Content {item} </a> 
        </div>
        <h2>gsgsggs gsgs sfts sgssg tgsjam  yD  TUY </h2> */}
        <div class="content "  >
           <img src={Pic} class="card-img-top" alt="..."/>
 
        </div>
        <h3 className="contentTitle">{item}</h3>
        </div>
        )}


     
    </div>
    <div className=" d-flex justify-content-center pb-5 pt-3">
    <span className="loadMore" > Load More </span>

    {/* <a href = "#" className="loadMore" id = "loadMore"> Load More </a> */}
    </div>
     
  </div>
}


export default BlogsList