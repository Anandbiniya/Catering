import React from 'react'
import Hero from "./Images/Hero.jpg"
import styles from "./Main.module.css"

function Main() {
  return (
    <div className={styles.main}>
        <img src={Hero}/>
    </div>
  )
}

export default Main