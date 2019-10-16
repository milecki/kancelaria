import React from "react"
import styles from "./footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    Copyright © {new Date().getFullYear()} {` `}
    Kancelaria prawna Prof. Szydło i Współpracownicy
  </footer>
)

export default Footer
