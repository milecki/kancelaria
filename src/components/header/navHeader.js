import React from "react"
import styles from "./navHeader.module.scss"
import { Link } from "gatsby"
// import logo from "../../images/logo-kancelaria-szydlo.png"
// import logoSmall from "../../images/logo-kancelaria-szydlo-small.png"
import MenuToggler from "./menuToggler"

const NavHeader = props => (
  <div className={styles.navHeader}>
    <Link to="/" className={styles.linkImg}>
      <img className={styles.logo} alt="Kancelaria Szydło logo" />
    </Link>
    <MenuToggler click={props.handleNavbar} />
  </div>
)

export default NavHeader
