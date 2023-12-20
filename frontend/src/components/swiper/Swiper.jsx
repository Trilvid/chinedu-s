import React from 'react';
import { motion } from 'framer-motion'
import {MdOutlineRealEstateAgent} from "react-icons/md"
import { RiStockLine, RiLineChartFill } from "react-icons/ri"
import { GiOilPump } from "react-icons/gi"
import { AiFillGold } from "react-icons/ai"
import Marquee from "react-fast-marquee"
import './myswiper.css';

const Swiperx = () => {
  return (
    <>
    
      <motion.div className="what-we-do">
        
    <div className='why-choose-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>what we do</h2>
            </div>
            <h1 data-aos="fade-up">the best you can find</h1>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati recusandae, laudantium harum pariatur iusto laborum quam asperiores iste explicabo veniam hic autem enim quisquam exercitationem praesentium ratione aliquid voluptas!
            </p>
        </div>
        </div>

      <Marquee className='mar-contain'>
     
     <div className="marquee">
       <span>
        <MdOutlineRealEstateAgent />
        <p>real estate</p>
      </span>
      <span>
        <RiStockLine />
        <p>stock market</p>
      </span>
      <span>
        <RiLineChartFill/>
        <p>forex/crypto</p>
        </span>
      <span>
        <GiOilPump />
        <p>liquid gold</p>
        </span>
        <span>
          <AiFillGold />
          <p>gold mining</p>
        </span>
     </div>
      </Marquee>
          
      </motion.div>


    </>
  )
}

export default Swiperx