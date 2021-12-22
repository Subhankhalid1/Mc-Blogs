import React from 'react'
import './Contact.css'
import Form from './Form'
const Contact=()=>{


    return<div className="contactBody d-flex">
      <div className="w-50  text-centerjustify-content-center m-auto">
      <div><h2 className=" contactHead py-4 ">We’d love to talk about what matters to you.</h2></div>
      <span className="typography">If you have any questions or comments please feel free to reach out. 
          Only relevant inquiries will be answered.
           Please expect about 72 hours for our reply.
           </span>
           <Form/>
      </div>
    </div>
}

export default Contact