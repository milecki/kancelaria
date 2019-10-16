import React from "react"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"
import styles from "./button.module.scss"

const Button = props => {
  let classes

  if (props.type === "cta") {
    classes = styles.btnCta
  } else if (props.type === "noBorder") {
    classes = styles.btnNoBorder
  } else {
    classes = styles.btnPrimary
  }

  return (
    <Link to={props.address} className={[classes, styles.btn].join(" ")}>
      {props.children} <FaAngleRight aria-hidden="true" />
    </Link>
  )
}

export default Button
