import React from 'react'
import Hero from "./Images/Hero.jpg"
import styles from "./Main.module.css"
import service from "./Images/service.jpg"

function Main() {
  return (
    <div>
    <div className={styles.main}>
        <img src={Hero}/>
    </div>
    <h2>What We Do</h2>
    <div className={styles.what_we_do}>
      
        <div>
            <h4>Live Counters</h4>
            <img src={service}/>
        </div>
        <div>
            <h4>Live Counters</h4>
            <img src={service}/>
        </div>
        <div>
            <h4>Live Counters</h4>
            <img src={service}/>
        </div>
       
    </div>

    </div>
  )
}

export default Main