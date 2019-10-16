import React from "react"
import Hero from "../components/hero/hero"
import bgImage from "../images/bg-contact.jpg"
import styles from "./contact.module.scss"
import ContactInfo from "../components/contactInfo/contactInfo"
import ContactForm from "../components/contactForm/contactForm"

const Contact = () => (
  <>
    <Hero src={bgImage}>Kontakt</Hero>
    <main>
      <h2>
        Czy są Państwo zainteresowani najwyższym poziomem doradztwa, analiz i
        opinii prawnych?
      </h2>
      <div className={styles.row}>
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  </>
)

export default Contact
