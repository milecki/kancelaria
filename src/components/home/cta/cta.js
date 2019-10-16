import React from "react"
import bgImage from "../../../images/bg-cta.jpg"
import styles from "./cta.module.scss"
import Button from "../../button/button"

const CTA = () => (
  <div
    className={styles.cta}
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
  >
    <h2 className={styles.ctaHeader}>
      Zapoznaj się z listą publikacji członków naszego zespołu
    </h2>
    <Button type="cta" address="/publications">
      Publikacje
    </Button>
  </div>
)

export default CTA
