import React from 'react'
import Banner from './Banner/Banner'
import Blogs from '../Blogs/Blogs'
import About from '../About/About'
import Contact from '../Contact/Contact'

const index = () => {
    return (
        <div>
            <Banner/>
            <Blogs/>
            <About/>
            <Contact/>
        </div>
    )
}
export default index