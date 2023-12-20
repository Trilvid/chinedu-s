import React from 'react'
import './landpage.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../buttons/Button'
import Swiperx from '../swiper/Swiper'

const Landpage = () => {
    // const navigate = useNavigate()
  return (
    <main>
         <div className="landpage">
         <Header />
        <div className='landpage-content-wrapper'>
           
            <motion.div className="landpage-text-container" 
            >
                <motion.h1
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.2}}
                >
                    let us manage and grow your investments using
                    <span className='emphasy'>ocean volte</span>
                </motion.h1>
                <motion.p
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}}
                >
                     Experience the power of our tailored approach, designed to maximize your returns and secure your financial future. Trust us to navigate the complexities of the market, while you sit back and watch your wealth flourish. 
                </motion.p>
                <Button />
            </motion.div>

            <div className="landpage-img-container">
                {/* <img src="newjpg/side.png" alt="file not found" /> */}
         </div>
            </div>
        </div>
    </main>
  )
}

export default Landpage