
import React from 'react'
import {motion} from 'framer-motion';

import "../css/Custom.css"

const LandingScreen = () => {
  return (
   <motion.div initial={{opacity:0,y:90}} animate={{opacity:1,y:0}} transition={{delay:0.2, duration:0.6,type: "spring", damping: 36, stiffness: 200,}} classNameName = "landingpage">
    
<section className="c-section">
  <h2 className="c-section__title"><span>Open Edu</span></h2>
  <ul className="c-services">
    <li className="c-services__item">
    <h3>Are you a Instructor?</h3>
    <p>We know how much effort it takes to make a tutorial online. We promise you, after using us tutorial making process will be very smooth and very less time consuming. We don't and will not take any money from your hardwork!</p>
    </li>
    <li className="c-services__item">
      <h3>No Doubts, We Promise!</h3>
      <p>Even after watching video you have doubt you can ask the instructor in a Live ScreenCast!</p>
    </li>
    <li className="c-services__item">
      <h3>Your Skills Matter, not the Platform</h3>
      <p>We Provide you with BlockChain Powered Certification, giving you security that it can't be forged hence increasing value of your Skills.</p>
    </li>
    <li className="c-services__item">
      <h3>Your Learning Matters, not your Internet Speed</h3>
      <p>Our Platform Uses approch that not makes videos Interactive but also drastically reduces size. So, Providing you with High Quality Video in a very low bandwidth.</p>
    </li>
    <li className="c-services__item">
      <h3>Everyone hates Middle Mens!</h3>
      <p>We are Open Source Platform, that is even if you are a teacher or a student, you will decide how you want to use us! w don't keep or sell your data. We will charge you of maintenance and database. </p>
    </li>
    <li className="c-services__item">
      <h3>Interactive ClassRoom in Video!</h3>
      <p>Providing Students with Tutorials, that allow Students to make Changes in Instructors screen, and then Continue watching the tutorial</p>
    </li>
  </ul>
</section>
   </motion.div>
  )
}

export default LandingScreen
