import React from "react"
import Hero from "../components/hero/hero"
import bgImage from "../images/bg-team.jpg"
import marekSzydlo from "../images/marek-szydlo2.png"
import wojciechSzydlo from "../images/wojciech-szydlo2.png"
import adamHareza from "../images/adam-hareza2.png"
import igorBialowas from "../images/igor-bialowas2.png"
import { FaCaretRight } from "react-icons/fa"

import styles from "./team.module.scss"

const teamArray = [
  {
    photo: marekSzydlo,
    name: "prof. dr hab. Marek Szydło",
    profession: "Radca prawny",
    highlights: [
      "kierownik Zakładu Prawa Konkurencji i Regulacji Sektorowej Wydziału Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego,",
      "ekspert do spraw legislacji w Biurze Analiz Sejmowych Kancelarii Sejmu RP.",
    ],
    bio: [
      "Ukończył studia prawnicze na Wydziale Prawa i Administracji Uniwersytetu Wrocławskiego (w roku 2001), uzyskując tytuł zawodowy magistra prawa. Uzyskał stopień naukowy doktora nauk prawnych (w roku 2004), następnie stopień doktora habilitowanego nauk prawnych (w roku 2007) oraz tytuł naukowy profesora nauk prawnych (2015).",
      "Jest zatrudniony na Uniwersytecie Wrocławskim (od 2002 r.) na stanowisku profesora nadzwyczajnego, gdzie pełni funkcję kierownika Zakładu Prawa Konkurencji i Regulacji Sektorowej.",
      "Ponadto jest zatrudniony w Biurze Analiz Sejmowych Kancelarii Sejmu RP na stanowisku eksperta do spraw legislacji (od 2007 r.)",
      "Posiada tytuł radcy prawnego (od 2008 r.).",
      "Marek Szydło jest autorem blisko 200 publikacji naukowych, w tym 14 samodzielnych monografii naukowych, a także opublikował ponad 170 artykułów naukowych w czasopismach prawniczych.",
      "Jest w szczególności autorem 17 artykułów naukowych opublikowanych w zagranicznych czasopismach z tzw. listy filadelfijskiej (Journal Citation Reports). Jego prace naukowe są cytowane w publikacjach naukowych na całym świecie (m. in. w Europie, USA, Australii), w tym są cytowane w prestiżowych czasopismach z listy filadelfijskiej oraz w zagranicznych podręcznikach wydawanych przez renomowanych wydawców. Obecnie Marek Szydło posiada jeden najwyższych tzw. współczynników wpływu swoich publikacji (Impact Factor według Web of Science liczony zgodnie z IF czasopisma) spośród wszystkich polskich prawników (wynoszący aktualnie ok. 20, co jak na publikacje w czasopismach z dziedziny nauk prawnych jest wynikiem znaczącym).",
      "Jego zainteresowania naukowe są skoncentrowane na szeroko rozumianym prawie publicznym, w tym publicznym prawie gospodarczym, prawie konstytucyjnym, prawie administracyjnym, prawie Unii Europejskiej, prawie międzynarodowym, a także na prawie prywatnym związanym z działalnością gospodarczą.",
      "Jest obecnie i był w przeszłości kierownikiem licznych projektów badawczych, w tym finansowanych przez Narodowe Centrum Nauki.",
      "Uzyskał liczne nagrody i wyróżnienia za działalność naukową, w tym: stypendium Fundacji na Rzecz Nauki Polskiej dla młodych naukowców (2003-2004), nagrodę czasopisma „Polityka” dla najlepszych młodych naukowców (2007), wyróżnienie w konkursie czasopisma „Państwo i Prawo” dla najlepszych rozpraw habilitacyjnych (2008) oraz stypendium Ministra Nauki i Szkolnictwa Wyższego dla wybitnych młodych naukowców (2012).",
      "Jest autorem stu kilkudziesięciu opinii prawnych i ekspertyz, sporządzonych dla publicznych instytucji (w tym dla Sejmu RP, Najwyższej Izby Kontroli, ministerstw, urzędów centralnych i jednostek samorządu terytorialnego) oraz dla największych polskich przedsiębiorstw (publicznych i prywatnych, w tym PKN Orlen, PGNiG, KGHM Polska Miedź S.A., dawna Telekomunikacja Polska S.A.). W szczególności sporządzał liczne merytoryczne ekspertyzy legislacyjne mające za przedmiot projekty ustaw procedowanych w Sejmie RP, a także sporządzał dla Marszałka Sejmu projekty stanowisk Sejmu RP na potrzeby postępowań przed Trybunałem Konstytucyjnym.",
    ],
  },
  {
    photo: wojciechSzydlo,
    name: "dr Wojciech Szydło",
    profession: "Adwokat",
    highlights: [
      "doktor nauk prawnych w specjalności: prawo cywilne,",
      "pracownik naukowy Wydziału Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego w Zakładzie Prawa Cywilnego i Prawa Międzynarodowego Prywatnego Instytutu Prawa Cywilnego.",
    ],
    bio: [
      "Dr Wojciech Szydło studia prawnicze ukończył w 2004 roku na Wydziale Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego. W roku 2008 uzyskał stopień doktora nauk prawnych, broniąc rozprawę doktorską pt. „Reprezentacja Skarbu Państwa w zakresie gospodarowania nieruchomościami”.",
      "W swojej praktyce prawniczej zajmuje się prawem cywilnym, prawem spółek, prawem ochrony konkurencji, prawem regulacji sektorowych, prawem zamówień publicznych, prawem partnerstwa publiczno-prywatnego oraz prawem obrotu, gospodarowania i zarządzania nieruchomościami, z uwzględnieniem prawa gospodarowania mieniem publicznym.",
      "Dr Wojciech Szydło doradza przedsiębiorcom w sprawach z zakresu stosowania przepisów prawa polskiego i unijnego. Jest autorem szeregu opinii i ekspertyz prawnych. Jest wykładowcą akademickim w Zakładzie Prawa Cywilnego i Prawa Międzynarodowego Wydziału Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego. Jednocześnie prowadzi zajęcia na studiach podyplomowych: „Gospodarka nieruchomościami. Zarządzanie – Utrzymanie – Wycena” na Wydziale Budownictwa Lądowego i Wodnego Politechniki Wrocławskiej oraz „Prawo gospodarki nieruchomościami” na Wydziale Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego, szkoląc z zakresu prawa cywilnego, prawa geologicznego i górniczego oraz prawa gospodarowania i zarządzania nieruchomościami, zajęcia dla aplikantów notarialnych oraz liczne szkolenia z zakresu szeroko pojętego prawa prywatnego.",
      "Dr Wojciech Szydło jest autorem kilkudziesięciu prac naukowych (artykułów, studiów) opublikowanych w polskich i zagranicznych czasopismach prawniczych, w tym autorem monografii o reprezentacji Skarbu Państwa w zakresie gospodarowania nieruchomościami, współautorem komentarza do Kodeksu cywilnego oraz komentarza o skardze na naruszenie prawa strony do rozpoznania sprawy bez nieuzasadnionej zwłoki.",
    ],
  },
  {
    photo: adamHareza,
    name: "dr Adam Haręża",
    profession: "Radca prawny",
    highlights: [
      "doktor nauk prawnych w specjalności: prawo administracyjne",
      "prezes spółki Legal Informatics sp. z o.o. z siedzibą we Wrocławiu",
      "wiceprezes fundacji – Instytut Prawa Technologii Informacyjnych",
    ],
    bio: [
      "Dr Adam Haręża studia prawnicze ukończył w 2003 roku na Wydziale Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego. W roku 20010 uzyskał stopień doktora nauk prawnych, broniąc rozprawę doktorską pt. Aspekty prawne elektronicznej administracji publicznej w Polsce.",
      "W swojej pracy naukowej oraz praktycznej zajmuje się m. in. takimi dziedzinami prawa, jak:",
      "- elektroniczna administracja publiczna;",
      "- prawo konstytucyjne;",
      "- prawo administracyjne;",
      "- postępowanie administracyjne oraz sądowo-administracyjne;",
      "- prawo administracyjne gospodarcze;",
      "- prawo karne komputerowe (cyberprzestępczość);",
      "- prawo komunikacji elektronicznej;",
      "- prawo ochrony środowiska;",
      "- prawo samorządowe;",
      "- postępowanie cywilne.",
      "Dr Adam Haręża jest autorem licznych opinii i ekspertyz prawnych, sporządzanych głównie na zlecenie przedsiębiorców. Jest również autorem i współautorem wielu prac naukowych (artykułów, studiów) opublikowanych  w renomowanych polskich czasopismach prawniczych, poświęconych materii prawa publicznego, ze szczególnym uwzględnieniem problematyki  elektronicznej administracji publicznej w Polsce i Europie oraz przestępczości teleinformatycznej.",
      "Jako Wiceprezes zarządu fundacji - Instytutu Prawa Technologii Informacyjnych (IPTI) aktywnie współpracuje z licznymi  podmiotami publicznymi i prywatnymi w celu propagowania idei rozwoju społeczeństwa informacyjnego oraz informatyzacji administracji publicznej, m.in. z Centrum Badań Problemów Prawnych i Ekonomicznych Komunikacji Elektronicznej Uniwersytetu Wrocławskiego (CBKE).",
    ],
  },
  {
    photo: igorBialowas,
    name: "Igor Białowąs",
    profession: "Radca prawny",
    highlights: [],
    bio: [
      "Igor Białowąs ukończył studia prawnicze w 2000 roku na Wydziale Prawa, Administracji i Ekonomii Uniwersytetu Wrocławskiego.",
      "W latach 2001–2004 – odbył aplikację sądową przy Sądzie Apelacyjnym we Wrocławiu, w którym następnie, w latach 2004-2007, pracował jako asystent sędziego.",
      "W 2006 r. został wpisany na listę radców prawnych w Okręgowej Izbie Radców Prawnych we Wrocławiu.",
      "Od 2007 r. prowadzi własną kancelarię radcowską.",
      "W latach 2004-2009 r. doktorant w Instytucie Nauk Administracyjnych Wydziału Prawa Administracji i Ekonomii Uniwersytetu Wrocławskiego. W zakresie działalności dydaktycznej prowadził zajęcia dydaktyczne ze studentami z przedmiotów: Prawo administracyjne gospodarcze oraz Prawo ochrony środowiska.",
      "Aktywnie współpracuje z Centrum Badań Problemów Prawnych i Ekonomicznych Komunikacji Elektronicznej Uniwersytetu Wrocławskiego.",
      "Autor kilkudziesięciu publikacji z zakresu prawa administracyjnego i cywilnego.",
    ],
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
      <ul className={styles.highlights}>
        {props.highlights.map((item, index, arr) => (
          <li key={arr[index]} className={styles.highlight}>
            <FaCaretRight className={styles.bullet} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.bio}>
        {props.bio.map((paragraph, index, arr) => (
          <p key={arr[index]}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
)

const Team = () => (
  <>
    <Hero src={bgImage}>Zespół</Hero>
    <section className={styles.team}>
      <div className={styles.container}>
        <ul>
          {teamArray.map(member => (
            <Member
              key={member.name}
              photo={member.photo}
              name={member.name}
              profession={member.profession}
              bio={member.bio}
              highlights={member.highlights}
            />
          ))}
        </ul>
      </div>
    </section>
  </>
)

export default Team
