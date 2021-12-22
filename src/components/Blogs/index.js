import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Blogs from './Blogs'

export default function index() {
    return (
        <div>
            <Blogs/>
            <About/>
            <Contact/>
        </div>
    )
}
