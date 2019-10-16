import React from "react"
import mapPl from "../../../images/map-pl.png"
import mapEu from "../../../images/map-eu.png"
import styles from "./intro.module.scss"

const Intro = () => (
  <section className={styles.intro}>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.mapContainer}>
          <img src={mapPl} alt="" />
        </div>
        <div className={styles.textContainer}>
          <p>
            Od 2008 roku świadczymy usługi doradztwa prawnego, które cechuje
            specjalistyczna wiedza, naukowa rzetelność, dokładność oraz
            profesjonalizm.
          </p>
          <p>
            Dzięki współpracy z naukowymi autorytetami oraz doświadczonymi
            prawnikami - praktykami oferujemy naszym klientom usługi prawne na
            najwyższym merytorycznym poziomie we wszystkich dziedzinach prawa
            prywatnego i publicznego.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.mapContainer}>
          <img src={mapEu} alt="" />
        </div>
        <div className={styles.textContainer}>
          <p>
            Pomagamy naszym klientom dostosowywać procesy i działania operacyjne
            do zmieniających się ram prawnych w obszarze prawa krajowego i
            unijnego.Doradzamy najważniejszym instytucjom i organom
            administracji publicznej oraz krajowym i zagranicznym podmiotom
            prowadzącym działalność gospodarczą.
          </p>
          <p>
            Dorobek naszych ekspertów obejmuje doradztwo prawne, specjalistyczne
            analizy i opinie prawne, których adresatami są: organy administracji
            rządowej, jednostki organizacyjne Skarbu Państwa, jednostki
            samorządu terytorialnego, spółki komunalne, publiczne jednostki
            ochrony zdrowia, uczelnie publiczne, instytuty badawcze, sądy
            powszechne i administracyjne, spółki z sektora bankowego,
            paliwowego, górniczego, telekomunikacyjnego, energetycznego,
            informatycznego, mediów, budowlanego, transportowego, pocztowego,
            farmaceutycznego, w tym najwięksi polscy przedsiębiorcy notowani na
            GPW w ramach indeksu WIG20.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
