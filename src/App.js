import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";
import { Slideshow, Slide } from "./components/slider";
import logo from "../src/components/img/logo.png";
import background from "../src/components/img/background.png";
import "../src/css/estilos_barra.css";
import "../src/css/estilos_home.css";
import "../src/css/estilos_slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import img1 from "./components/img/1.jpg";
import img2 from "./components/img/2.jpg";
import img3 from "./components/img/3.jpg";
import img4 from "./components/img/4.jpg";
import Ventana from "./components/modal";
import Contacto from "./components/form";

const React_redireccion = () => (
  <Redirect to="/" />
)

const Home = () => (
  <div className="all">
    <div className="header">
      <div className="overly"></div>
      <img src={background} className="background" alt="" />
      <img src={logo} className="logo" alt="" />
      <div className="contenedor-texto-home">
        <p className="texto-home">
          Si buscas cambiar tu estilo de vida con prácticas saludables para
          cuerpo y mente
          <br></br>
          Si buscas transformarte
          <br></br>
          Si buscas vivir en paz has llegado a un lugar donde con nuestra
          experiencia de 20 años inspirados en el Ayurveda como medicina y
          camino de conciencia compartimos salud, esperanza, equilibrio y
          transformación.
          <br></br>
          Wah en sánscrito significa gozo, en el islam significa la guía que te
          inspira a escuchar tu espíritu y retirar las sombras & revelar luz, y
          en occidente significa a-sombrarse. Te invitamos a que vivas la
          experiencia de retirar el carbón al Diamante que eres esencialmente y
          la sombra a los aparentes problemas trayendo la luz de las soluciones
          internas.
        </p>
      </div>
      <p className="newsletter-btn">
        <Ventana />
        <p>Suscribete a nuestra newsletter</p>
      </p>
    </div>
    <div className="next">
      <Slideshow controles={true}>
        <Slide>
          <Link to="/cursos">
            <img src={img1} alt="" className="i-s" />
          </Link>
        </Slide>
        <Slide>
          <Link to="/cursos">
            <img src={img2} alt="" className="i-s" />
          </Link>
        </Slide>
        <Slide>
          <Link to="/cursos">
            <img src={img3} alt="" className="i-s" />
          </Link>
        </Slide>
        <Slide>
          <Link to="/cursos">
            <img src={img4} alt="" className="i-s" />
          </Link>
        </Slide>
      </Slideshow>
      <div className="filosofia">
        <h1>Filosofia</h1>
        <p>Transformamos vidas facilitando conciencia, salud y propósito.</p>
      </div>
    </div>
    <div className="estudios">
      <div className="overly-est"></div>
      <div className="texto-est">
        <p className="p-est">
          Tenemos 3 programas para que Tu CUERPO,
          <br></br>
          a través de nuestro programa
          de Ayurveda Lifestyle, sienta energía y puedas prevenir cambiando
          hábitos de forma práctica, fácil y enfocada a tu constitución a través
          de los 6 pilares fundamentales de un bienestar completo.
          <br></br>
          Tu MENTE se
          transforme a través de enseñanzas y técnicas milenarias que la Ciencia
          del Ayurveda ofrece para que tengas paz, claridad, autoconocimiento y
          crecimiento en la Formación en Coaching Ayurveda.
          <br></br>
          Tu ESPÍRITU recuerde
          el camino de regreso a ese ser sano, despierto y completo a través de
          nuestra Formación en Sanación que te reconectan con el Espíritu.
        </p>
        <p className="newsletter-btn-est">
          <Ventana />
          <p>Suscribete a nuestra newsletter</p>
        </p>
      </div>
    </div>
  </div>
);

const Clases = () => (
  <div>
    <p>Clases</p>
    <Link to="/">Home</Link>
  </div>
);

const Cursos = () => (
  <div>
    <p>Cursos</p>
    <Link to="/">Home</Link>
  </div>
);

const Newsletter = () => (
  <div>
    <p>Newsletter</p>
    <Link to="/">Home</Link>
  </div>
);

const Header = () => (
  <header className="bar" id="bar">
    <Link to="/" className="logo-link">
      <img src={logo} alt="" className="img-bar" />
    </Link>
    <div className="naver">
      <Link to="/clases">
        <p className="p-bar">Clases</p>
      </Link>
      <Link to="/cursos">
        <p className="p-bar">Cursos</p>
      </Link>
      <Link to="/newsletter">
        <p className="p-bar">Newsletter</p>
      </Link>
      <Link to="/contacto">
        <p className="p-bar">Contacto</p>
      </Link>
    </div>
  </header>
);
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
  let Desplazamiento_Actual = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento_Actual) {
    document.getElementById("bar").style.top = "0";
  } else {
    document.getElementById("bar").style.top = "-100px";
  }
  ubicacionPrincipal = Desplazamiento_Actual;
};
const Whatsapp = () => (
  <a
    target="_blank"
    rel="noreferrer"
    href="https://wa.me/0999373594?text=Esto%20es%20una%20prueba"
  >
    <FontAwesomeIcon icon={faPhone} className="whatsapp" />
  </a>
);
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Whatsapp />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/react" component={React_redireccion} />
        <Route path="/clases" component={Clases} />
        <Route path="/cursos" component={Cursos} />
        <Route path="/newsletter" component={Newsletter} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </div>
  </BrowserRouter>
);

reactDOM.render(routes, document.getElementById("root"));
