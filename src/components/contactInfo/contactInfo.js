import React from "react"
import styles from "./contactInfo.module.scss"

import { FaMapMarkerAlt } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import { FaMobileAlt } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"

const ContactInfo = () => (
  <div className={styles.infoContainer}>
    <h3 className={styles.companyName}>
      Profesor Szydło i Współpracownicy <span>kancelaria prawna</span>
    </h3>
    <p className={styles.address}>
      <FaMapMarkerAlt />
      ul. Jaźwińska 5<br />
      54-060 Wrocław
    </p>
    <p className={styles.email}>
      <FaRegEnvelope /> kancelaria@kancelariaszydlo.pl
    </p>

    <div className={styles.personContactInfo}>
      <p>
        <FaUserCircle /> adw. dr Wojciech Szydło
      </p>
      <p>
        <FaMobileAlt />
        +48 602 108 636
      </p>
      <p>
        <FaRegEnvelope /> wojciech.szydlo@kancelariaszydlo.pl
      </p>
    </div>

    <div className={styles.personContactInfo}>
      <p>
        <FaUserCircle /> r.pr. dr Adam Haręża
      </p>
      <p>
        <FaMobileAlt /> +48 513 969 696
      </p>
      <p>
        <FaRegEnvelope /> adam.hareza@kancelariaszydlo.pl
      </p>
    </div>

    <div className={styles.registers}>
      <p>KRS: 0000321994</p>
      <p>REGON: 020908422</p>
    </div>

    <div className={styles.registers}>
      <p>NIP: 8982151821</p>
      <p>PKO BP SA, 38 1020 5242 0000 2502 0233 2773</p>
    </div>
  </div>
)

export default ContactInfo
