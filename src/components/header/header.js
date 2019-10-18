import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from "./header.module.scss"
import NavHeader from "./navHeader"
import NavLinks from "./navLinks"

class Header extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(prevState => {
      return { navbarOpen: !prevState.navbarOpen }
    })
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <nav className={styles.nav}>
            <NavHeader
              handleNavbar={this.handleNavbar}
              siteTitle={this.props.siteTitle}
            />
            <NavLinks navbarOpen={this.state.navbarOpen} />
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
