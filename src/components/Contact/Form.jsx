import React from 'react'
import './Contact.css'
const Form=()=>{


    return<div>
  <div class="mb-3 pt-3">
  <label for="exampleFormControlInput1" class="form-label">Name <span style={{color:'red', fontWeight:'bold'}}>*</span></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your name here..."/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Address <span style={{color:'red', fontWeight:'bold'}}>*</span></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your email address here..."/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message <span style={{color:'red', fontWeight:'bold'}}>*</span></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Your message here..."></textarea>
</div>
<div class="mb-3">
<button className="btn bw-bold">Send</button>
</div>
    </div>
}

export default Form