import React from "react"
import styles from "./hero.module.scss"

const Hero = props => (
  <div
    className={styles.hero}
    style={{
      backgroundImage: `url(${props.src})`,
    }}
  >
    <h1>{props.children}</h1>
  </div>
)

export default Hero
