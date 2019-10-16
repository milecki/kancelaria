import React from "react"
import Button from "../button/button"
import styles from "./contactForm.module.scss"

const ContactForm = () => (
  <div className={styles.formContainer}>
    <h3 className={styles.formHeading}>Formularz kontaktowy</h3>
    <form className={styles.form}>
      <label className={styles.label}>
        <input type="text" className={styles.input} />
        <span>Imię i nazwisko</span>
      </label>

      <label className={styles.label}>
        <input type="text" className={styles.input} />
        <span>Telefon</span>
      </label>

      <label className={styles.label}>
        <input type="text" className={styles.input} />
        <span>Email</span>
      </label>

      <label className={styles.label}>
        <textarea className={styles.textarea} />
        <span>Treść wiadomości</span>
      </label>

      <Button address="/">Wyślij wiadomość</Button>
    </form>
  </div>
)

export default ContactForm
