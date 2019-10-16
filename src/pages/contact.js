import React from "react"
import Hero from "../components/hero/hero"
import Button from "../components/button/button"
import bgImage from "../images/bg-contact.jpg"
import styles from "./contact.module.scss"

import { FaMapMarkerAlt } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import { FaMobileAlt } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"

const Info = () => (
  <div className={styles.infoContainer}>
    <h3 className={styles.companyName}>
      Profesor Szydło i Współpracownicy
      <span>kancelaria prawna</span>
    </h3>
    <p className={styles.address}>
      <FaMapMarkerAlt />
      ul. Jaźwińska 5<span>54-060 Wrocław</span>
    </p>
    <p className={styles.email}>
      <FaRegEnvelope /> kancelaria@kancelariaszydlo.pl
    </p>

    <div>
      <div>
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
      <div>
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

      <div>
        <p>KRS: 0000321994</p>
        <p>REGON: 020908422</p>
      </div>

      <div>
        <p>NIP: 8982151821</p>
        <p>PKO BP SA, 38 1020 5242 0000 2502 0233 2773</p>
      </div>
    </div>
  </div>
)

const Form = () => (
  <>
    <h3>Formularz kontaktowy</h3>
    <form>
      <label>
        <input type="text" />
        Imię i nazwisko
      </label>

      <label>
        <input type="text" />
        Telefon
      </label>

      <label>
        <input type="text" />
        Email
      </label>

      <label>
        <textarea name="" id="" cols="30" rows="10" />
        Treść wiadomości
      </label>

      <Button address="/">Wyślij wiadomość</Button>
    </form>
  </>
)

const Contact = () => (
  <>
    <Hero src={bgImage}>Kontakt</Hero>
    <main>
      <h2>
        Czy są Państwo zainteresowani najwyższym poziomem doradztwa, analiz i
        opinii prawnych?
      </h2>
      <div className={styles.row}>
        <Info />
        <Form />
      </div>
    </main>
  </>
)

export default Contact
