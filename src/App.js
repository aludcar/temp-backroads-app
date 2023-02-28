import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesList from "./components/ServiceList";
import Tours from "./components/Tours";

import {pageLinks, socialLinks, tours, services} from './data.js';

function App() {
  return (
    <>
      <Navbar pageLinks={pageLinks} socialLinks={socialLinks}/>
      <Hero />
      <About />
      <ServicesList services={services} />
      <Tours tours={tours} />
      <Footer socialLinks={socialLinks} pageLinks={pageLinks} />
    </>
  );
}

export default App;
