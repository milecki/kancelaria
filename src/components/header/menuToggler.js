import React from "react"
import styles from "./menuToggler.module.scss"

const MenuToggler = props => (
  <div className={styles.menuTogglerIcon} onClick={() => props.click()}>
    <div className={styles.bar} />
    <div className={styles.bar} />
    <div className={styles.bar} />
  </div>
)

export default MenuToggler
