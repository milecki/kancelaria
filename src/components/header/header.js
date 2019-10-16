import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"
import logo from "../../images/logo-kancelaria-szydlo.png"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Link to="/" className={styles.linkImg}>
        {/* {siteTitle} */}
        <img
          style={{
            height: `30px`,
          }}
          src={logo}
          alt="Kancelaria Szydło logo"
        />
      </Link>
      <ul
        className={styles.nav}
        style={{
          display: `flex`,
          listStyleType: `none`,
          alignItems: `center`,
          justifyContent: `space-between`,
          width: `60%`,
          fontWeight: 700,
          fontFamily: `Martel Sans', sansSerif`,
          letterSpacing: `1px`,
          textTransform: `uppercase`,
          fontSize: `12px`,
        }}
      >
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
