import React from "react"
import Button from "../../button/button"
import marekSzydlo from "../../../images/marek-szydlo2.png"
import wojciechSzydlo from "../../../images/wojciech-szydlo2.png"
import adamHareza from "../../../images/adam-hareza2.png"
import igorBialowas from "../../../images/igor-bialowas2.png"
import styles from "./team.module.scss"

const teamArray = [
  {
    photo: marekSzydlo,
    name: "prof. dr hab. Marek Szydło",
    profession: "Radca prawny",
    bio:
      "Prof. dr hab. Marek Szydło jest ekspertem w dziedzinie prawa publicznego, w tym prawa Unii Europejskiej, prawa administracyjnego i prawa publicznego gospodarczego, ze szczególnym uwzględnieniem prawa konkurencji, prawa telekomunikacyjnego i energetycznego, prawa samorządu terytorialnego i gospodarki komunalnej oraz prawa zamówień publicznych. Autor stu kilkudziesięciu opinii prawnych i ekspertyz, sporządzonych dla publicznych instytucji (w tym dla Sejmu RP, Najwyższej Izby Kontroli, ministerstw, urzędów centralnych i jednostek samorządu terytorialnego) oraz dla największych polskich przedsiębiorstw (publicznych i prywatnych, w tym PKN Orlen, PGNiG, KGHM Polska Miedź S.A., Telekomunikacja Polska S.A.). W szczególności sporządzał liczne merytoryczne ekspertyzy legislacyjne mające za przedmiot projekty ustaw procedowanych w Sejmie RP, a także sporządzał dla Marszałka Sejmu projekty stanowisk Sejmu RP na potrzeby postępowań przed Trybunałem Konstytucyjnym. W latach 2011-2013 był radcą prawnym Rady Nadzorczej KGHM Polska Miedź S.A.",
    address: "/team",
  },
  {
    photo: wojciechSzydlo,
    name: "dr Wojciech Szydło",
    profession: "Adwokat",
    bio:
      "Dr Wojciech Szydło specjalizuje się w regulacjach polskiego i unijnego prawa prywatnego, w szczególności z zakresu prawa spółek, prawa umów, prawa zamówień publicznych oraz prawa ochrony konkurencji. Jest autorem wielu opinii i ekspertyz prawnych. Jest wykładowcą akademickim na studiach prawniczych przedmiotów z dziedziny prawa cywilnego. Jednocześnie prowadzi zajęcia na studiach podyplomowych organizowanych na Wydziale Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego oraz na Wydziale Budownictwa Lądowego i Wodnego Politechniki Wrocławskiej z zakresu prawa geologicznego i górniczego oraz prawa gospodarowania i zarządzania nieruchomościami, a także szkolenia z zakresu szeroko pojętego prawa prywatnego. Jest autorem wielu prac naukowych (artykułów, studiów) opublikowanych w renomowanych polskich czasopismach prawniczych, w tym autorem monografii o reprezentacji Skarbu Państwa w zakresie gospodarowania nieruchomościami, współautorem komentarza do kodeksu cywilnego oraz komentarza o skardze na naruszenie prawa strony do rozpoznania sprawy bez nieuzasadnionej zwłoki.",
    address: "/team",
  },
  {
    photo: adamHareza,
    name: "dr Adam Haręża",
    profession: "Radca prawny",
    bio:
      "Dr Adam Haręża jest autorem licznych opinii i ekspertyz prawnych, sporządzanych głównie na zlecenie przedsiębiorców. Jest również autorem i współautorem wielu prac naukowych (artykułów, studiów) opublikowanych  w renomowanych polskich czasopismach prawniczych, poświęconych materii prawa publicznego, ze szczególnym uwzględnieniem problematyki elektronicznej administracji publicznej w Polsce i Europie oraz przestępczości teleinformatycznej. Jako Wiceprezes zarządu fundacji - Instytutu Prawa Technologii Informacyjnych (IPTI) aktywnie współpracuje z licznymi podmiotami publicznymi i prywatnymi w celu propagowania idei rozwoju społeczeństwa informacyjnego oraz informatyzacji administracji publicznej, m.in. z Centrum Badań Problemów Prawnych i Ekonomicznych Komunikacji Elektronicznej Uniwersytetu Wrocławskiego (CBKE).",
    address: "/team",
  },
  {
    photo: igorBialowas,
    name: "Igor Białowąs",
    profession: "Radca prawny",
    bio:
      "Igor Białowąs ukończył studia prawnicze w 2000 roku na Wydziale Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego. W latach 2001–2004 – odbył aplikację sądową przy Sądzie Apelacyjnym we Wrocławiu, w którym następnie, w latach 2004-2007, pracował jako asystent sędziego. W 2006 r. został wpisany na listę radców prawnych w Okręgowej Izbie Radców Prawnych we Wrocławiu. Od 2007 r. prowadzi własną kancelarię radcowską. W latach  2004-2009 r. doktorant w Instytucie Nauk Administracyjnych Wydziału Prawa Administracji i Ekonomii Uniwersytetu Wrocławskiego. W zakresie działalności dydaktycznej prowadził zajęcia dydaktyczne ze studentami z przedmiotów: Prawo administracyjne gospodarcze oraz Prawo ochrony środowiska.",
    address: "/team",
  },
]

const Member = props => (
  <div className={styles.member}>
    <div className={styles.imgContainer}>
      <img className={styles.img} src={props.photo} alt={props.name} />
    </div>
    <div className={styles.textContainer}>
      <h3 className={styles.name}>{props.name}</h3>
      <p className={styles.profession}>{props.profession}</p>
      <p className={styles.bio}>{props.bio}</p>
      <Button type="noBorder" address={props.address}>
        Czytaj więcej
      </Button>
    </div>
  </div>
)

const Team = () => (
  <section>
    <div className={styles.container}>
      <h2>
        Członków naszego zespołu cechuje najwyższy poziom merytoryczny i bogate
        doświadczenie praktyczne
      </h2>
      <ul>
        {teamArray.map(member => (
          <Member
            key={member.name}
            photo={member.photo}
            name={member.name}
            profession={member.profession}
            bio={member.bio}
            address={member.address}
          />
        ))}
      </ul>
    </div>
  </section>
)

export default Team
