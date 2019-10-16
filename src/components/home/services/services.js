import React from "react"
import styles from "./services.module.scss"
import analizyIcon from "../../../images/analizy-i-opinie.png"
import complianceIcon from "../../../images/legal-compliance.png"
import reprezentacjaIcon from "../../../images/reprezentacja.png"
import obslugaIcon from "../../../images/obsluga-prawna.png"

const Offer = () => (
  <section className={styles.services}>
    <div className={styles.container}>
      <h2>
        Pomagamy naszym klientom w pokonywaniu aktualnych wyzwań i kształtowaniu
        długoterminowych strategii
      </h2>
      <div className={styles.row}>
        <div className={styles.service}>
          <img src={analizyIcon} alt="" />
          <p className={styles.serviceName}> Analizy i opinie </p>
          <p className={styles.serviceDesc}>
            sporządzanie specjalistycznych opinii prawnych w złożonych i
            skomplikowanych merytorycznie sprawach
          </p>
        </div>
        <div className={styles.service}>
          <img src={complianceIcon} alt="" />
          <p className={styles.serviceName}> Legal compliance </p>
          <p className={styles.serviceDesc}>
            kompleksowy audyt pól działalności oraz procedur wewnętrznych
            klienta pod kątem ryzyka regulacyjnego
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.service}>
          <img src={reprezentacjaIcon} alt="" />
          <p className={styles.serviceName}> Reprezentacja </p>
          <p className={styles.serviceDesc}>
            reprezentacja w postępowaniach przed sądami powszechnymi, w tym
            przed SOKiK, sądami administracyjnymi oraz w postępowaniach
            administracyjnych zawisłych przed Prezesem UOKiK, Prezesem URE oraz
            Prezesem UKE
          </p>
        </div>
        <div className={styles.service}>
          <img src={obslugaIcon} alt="" />
          <p className={styles.serviceName}> Obsługa prawna </p>
          <p className={styles.serviceDesc}>
            świadczenie bieżącej obsługi prawnej oraz doradztwa dla podmiotów
            sektora prywatnego, jak i publicznego
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Offer
