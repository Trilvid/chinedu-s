import React from 'react'
import './button.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


const Button = () => {
    const navigate= useNavigate()
  return(
<motion.button
onClick={()=>{
    navigate('/signup')
}}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
</svg>
Get Started
</motion.button>
)
}



export default Button