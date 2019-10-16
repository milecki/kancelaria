import React from "react"
import Button from "../button/button"
import styles from "./contactForm.module.scss"

const ContactForm = () => (
  <div className={styles.formContainer}>
    <h3 className={styles.h3}>Formularz kontaktowy</h3>
    <form className={styles.form}>
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
  </div>
)

export default ContactForm
