import React from 'react'
import styles from "./Home.module.css"
import Cater from "./Images/ManaVantalu.jpg"
// import Main from './Main'
function Home() {
  return (
    <div className={styles.navbar} >
     <div>
        <img src={Cater}/>
     </div>
     <div className={styles.about}>
     <nav>About Us</nav>
        <nav>Services</nav>
        <nav>Gallery</nav>
        <nav>Contact Us</nav>
     </div>
   
       
    </div>
    
  )
}

export default Home