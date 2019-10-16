import React from "react"
import styles from "./areas.module.scss"
import eAdminIcon from "../../../images/e-administracja.png"
import gospKomunIcon from "../../../images/gospodarka-komunalna.png"
import pomocPublIcon from "../../../images/pomoc-publiczna.png"
import prawoGeolGorn from "../../../images/prawo-geologiczne-i-gornicze.png"
import prawoKonkurIcon from "../../../images/prawo-konkurencji.png"
import prawoTelIcon from "../../../images/prawo-telekomunikacyjne-i-pocztowe.png"
import prawoEnergetIcon from "../../../images/prawo-energetyczne.png"
import prawoZamowPubIcon from "../../../images/prawo-zamowien-publicznych.png"
import zarzMieniemIcon from "../../../images/zarzadzanie-mieniem-panstwowym.png"
import Button from "../../button/button"

const Areas = () => (
  <section className={styles.areas}>
    <div className={styles.container}>
      <h2>
        Oferujemy swoją wiedzę i doświadczenie w wielu specjalistycznych
        dziedzinach prawa
      </h2>
      <div className={styles.row}>
        <div className={styles.area}>
          <img src={eAdminIcon} alt="" />
          <p className={styles.areaName}>e-Administracja</p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
        <div className={styles.area}>
          <img src={gospKomunIcon} alt="" />
          <p className={styles.areaName}>Gospodarka komunalna</p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
        <div className={styles.area}>
          <img src={pomocPublIcon} alt="" />
          <p className={styles.areaName}>Pomoc publiczna</p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.area}>
          <img src={prawoGeolGorn} alt="" />
          <p className={styles.areaName}>
            Prawo
            <br /> geologiczne i górnicze
          </p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
        <div className={styles.area}>
          <img src={prawoKonkurIcon} alt="" />
          <p className={styles.areaName}>
            Prawo
            <br /> konkurencji
          </p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
        <div className={styles.area}>
          <img src={prawoTelIcon} alt="" />
          <p className={styles.areaName}>
            Prawo
            <br /> telekomunikacyjne i pocztowe
          </p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.area}>
          <img src={prawoEnergetIcon} alt="" />
          <p className={styles.areaName}>
            Prawo
            <br /> energetyczne
          </p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
        <div className={styles.area}>
          <img src={prawoZamowPubIcon} alt="" />
          <p className={styles.areaName}>
            Prawo
            <br /> zamówień publicznych
          </p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
        <div className={styles.area}>
          <img src={zarzMieniemIcon} alt="" />
          <p className={styles.areaName}>
            Zarządzanie
            <br /> mieniem państwowym
          </p>
          <Button address="/">Dowiedz się więcej</Button>
        </div>
      </div>
    </div>
  </section>
)

export default Areas
