import React from 'react'
import Martin from './image/martin.jpg'
import './about.css'
const About=()=>{


    return <div style={{color:'#000000 ', fontFamily:'roboto', fontSize:'22px'}}> 
    <div>
    <h2 className=" aboutHead text-center pb-2 pt-4"> About</h2>
    </div>
   
        <div  style={{border:'none'}}className="card w-75 d-flex m-auto pb-3" >
  <div className="row g-0 d-flex py-2 px-2">
    <div class="col-md-4 border border-dark">
      <img src={Martin} class="img-fluid rounded-start d-flex m-auto" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <p class="card-text color-dark">  I’m Martin Couture, but people call me “MC. </p>
        <p class="card-text color-dark"> 
         I am a digital entrepreneur with more than a decade of marketing and development working with brands like Nike, 
         Audi, Disney, Fendi, Mercedes, Tiffany, Bosch, Metro...
          </p>
         <p class="card-text color-dark"> 
        I own multiple blogs where I share my marketing knowledge. 
        </p>
        <p class="card-text color-dark"> 
        Feel free to reach out using the form below! </p>
       
      </div>
    </div>
  </div>
</div>
</div>
   
}

export default About