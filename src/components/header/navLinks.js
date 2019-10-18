import React, { Component } from "react"
import styles from "./navLinks.module.scss"
import { Link } from "gatsby"

class NavLinks extends Component {
  render() {
    let styleName
    if (this.props.navbarOpen) {
      styleName = "open"
    } else {
      styleName = "closed"
    }

    return (
      <ul className={`${styles.linkList}  ${styles[styleName]}`}>
        <li>
          <Link to="/"> Start </Link>
        </li>
        <li>
          <Link to="/services"> Zakres usług </Link>
        </li>
        <li>
          <Link to="/team"> Zespół </Link>
        </li>
        <li>
          <Link to="/publications"> Publikacje </Link>
        </li>
        <li>
          <Link to="/blog"> Blog </Link>
        </li>
        <li>
          <Link to="/contact"> Kontakt </Link>
        </li>
      </ul>
    )
  }
}

export default NavLinks
