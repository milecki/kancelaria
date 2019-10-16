import React from "react"
import Hero from "../components/hero/hero"
import bgImage from "../images/bg-services.jpg"

import { FaCaretRight } from "react-icons/fa"

import eAdminIcon from "../images/e-administracja-r.png"
import gospKomunIcon from "../images/gospodarka-komunalna-r.png"
import pomocPublIcon from "../images/pomoc-publiczna-r.png"
import prawoGeolGorn from "../images/prawo-geologiczne-i-gornicze-r.png"
import prawoKonkurIcon from "../images/prawo-konkurencji-r.png"
import prawoTelIcon from "../images/prawo-telekomunikacyjne-i-pocztowe-r.png"
import prawoEnergetIcon from "../images/prawo-energetyczne-r.png"
import prawoZamowPubIcon from "../images/prawo-zamowien-publicznych-r.png"
import zarzMieniemIcon from "../images/zarzadzanie-mieniem-panstwowym-r.png"
import styles from "./services.module.scss"

const fieldsArr = [
  {
    name: "e-Administracja",
    icon: eAdminIcon,
    services: [
      "tworzenie audytów bezpieczeństwa systemów teleinformatycznych stosowanych przez badane podmioty",
      "opinie o wdrożonych w podmiotach narzędziach informatycznych (systemach, aplikacjach, rozwiązaniach sprzętowych) wspierających funkcjonowanie e-Administracji",
      "raporty opisujące stan realizacji obowiązków prawnych w zakresie nowych instytucji prawa, kreujących sferę e-Administracji",
      "porady oraz zalecenia poświęcone funkcjonowaniu e-Administracji w badanym podmiocie",
      "testy sprawdzające funkcjonalność systemów teleinformatycznych stosowanych w celu realizowania zadań publicznych przez badany podmiot",
    ],
  },
  {
    name: "Gospodarka komunalna",
    icon: gospKomunIcon,
    services: [
      "formy organizacyjno-prawne gospodarki komunalnej",
      "powierzanie zadań spółkom komunalnym",
      "status prawny, organy i funkcjonowanie spółek komunalnych",
      "powierzanie zadań z zakresu gospodarki komunalnej podmiotom trzecim",
      "zamówienia publiczne, koncesje na roboty budowlane i usługi oraz partnerstwo publiczno-prywatne w gospodarce komunalnej",
      "zarząd mieniem j. s. t.",
      "administracyjna reglamentacja w gospodarce komunalnej (zezwolenia, ceny urzędowe)",
    ],
  },
  {
    name: "Pomoc publiczna",
    icon: pomocPublIcon,
    services: [
      "występowanie elementów pomocy publicznej w poszczególnych transakcjach lub działaniach",
      "prawna dopuszczalność pomocy publicznej w świetle prawa unijnego",
      "notyfikacja i zatwierdzanie pomocy indywidualnej oraz programów pomocowych",
      "pomoc publiczna na świadczenie usług w ogólnym interesie gospodarczym",
      "rekompensaty z tytułu świadczenia usług w ogólnym interesie gospodarczym",
      "kontrola wykorzystania pomocy publicznej i zwrot pomocy publicznej",
      "postępowania sądowe w sprawach pomocy publicznej, w tym przed sądami unijnymi",
    ],
  },
  {
    name: "Prawo geologiczne i górnicze",
    icon: prawoGeolGorn,
    services: [
      "reprezentacja przed organami administracji geologicznej oraz organami nadzoru górniczego",
      "koncesje geologiczne i górnicze",
      "własność górnicza",
      "użytkowanie górnicze",
      "szkody górnicze",
      "partnerstwo publiczno-prywatne w ramach działalności geologicznej i górniczej",
    ],
  },
  {
    name: "Prawo konkurencji",
    icon: prawoKonkurIcon,
    services: [
      "porozumienia ograniczające konkurencję",
      "nadużywanie pozycji dominującej",
      "koncentracja przedsiębiorców",
      "nieuczciwe praktyki rynkowe",
      "postępowania antymonopolowe, w tym przed Komisją Europejską",
      "postępowania przed Sądem Ochrony Konkurencji i Konsumentów, Sądem Apelacyjnym, Sądem Najwyższym oraz przed sądami unijnymi",
      "czyny nieuczciwej konkurencji",
    ],
  },
  {
    name: "Prawo telekomunikacyjne i pocztowe",
    icon: prawoTelIcon,
    services: [
      "uprawnienia do wykonywania działalności telekomunikacyjnej i pocztowej",
      "reglamentacja cen na usługi telekomunikacyjne i pocztowe",
      "umowy o współpracy przedsiębiorców telekomunikacyjnych i pocztowych (w tym umowy dostępowe, o połączeniu sieci, o współpracy międzyoperatorskiej)",
      "umowy z użytkownikami usług telekomunikacyjnych i pocztowych",
      "spory przedsiębiorców telekomunikacyjnych i pocztowych z regulatorem i innymi organami publicznymi",
      "postępowania przedsiębiorców przed sądami administracyjnymi, Sądem Ochrony Konkurencji i Konsumentów, Sądem Apelacyjnym, Sądem Najwyższym oraz przed sądami unijnymi",
    ],
  },
  {
    name: "Prawo energetyczne",
    icon: prawoEnergetIcon,
    services: [
      "koncesje energetyczne",
      "taryfy na paliwa i energię",
      "umowy pomiędzy przedsiębiorstwami energetycznymi, w tym umowy przesyłowe",
      "umowy przedsiębiorstw energetycznych z odbiorcami paliw i energii",
      "odnawialne źródła energii",
      "spory przedsiębiorstw energetycznych z regulatorem i innymi organami publicznymi",
      "postępowania przedsiębiorstw energetycznych przed sądami administracyjnymi, Sądem Ochrony Konkurencji i Konsumentów, Sądem Apelacyjnym, Sądem Najwyższym oraz przed sądami unijnymi",
    ],
  },
  {
    name: "Prawo zamówień publicznych",
    icon: prawoZamowPubIcon,
    services: [
      "podleganie ustawie Prawo zamówień publicznych, w tym status zamawiającego i wyłączenia ustawowe",
      "postępowanie o udzielenie zamówienia publicznego z perspektywy zamawiającego lub wykonawcy",
      "umowa w sprawie zamówienia publicznego i jej zmiany",
      "postępowanie przed Krajową Izbą Odwoławczą, sądami powszechymi, sądami administracyjnymi i Sądem Najwyższym",
      "koncesje na roboty budowlane i usługi oraz partnerstwo publiczno-prywatne",
    ],
  },
  {
    name: "Zarządzanie mieniem państwowym",
    icon: zarzMieniemIcon,
    services: [
      "status prawny, organizacja i funkcjonowanie spółek z udziałem Skarbu Państwa",
      "status prawny, organizacja i funkcjonowanie państwowych osób prawnych innych niż spółki",
      "wykonywanie praw z udziałów i akcji w spółkach Skarbu Państwa",
      "zarządzanie nieruchomościami skarbowymi",
      "nadzór nad zarządzaniem mieniem państwowym",
    ],
  },
]

const Field = props => (
  <li className={styles.field}>
    <div className={styles.fieldIconGroup}>
      <img className={styles.fieldIcon} src={props.icon} alt={props.name} />
      <h2 className={styles.fieldName}>{props.name}</h2>
    </div>

    <ul className={styles.servicesList}>
      {props.services.map((service, index, arr) => (
        <li className={styles.singleService} key={arr[index]}>
          <FaCaretRight className={styles.bullet} aria-hidden="true" />
          {service}
        </li>
      ))}
    </ul>
  </li>
)

const Services = () => (
  <>
    <Hero src={bgImage}>Zakres usług</Hero>
    <main>
      <div className={styles.container}>
        <ul className={styles.fieldsList}>
          {fieldsArr.map(field => (
            <Field
              name={field.name}
              icon={field.icon}
              services={field.services}
              key={field.name}
            />
          ))}
        </ul>
      </div>
    </main>
  </>
)

export default Services
