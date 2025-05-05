
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { CertificatePage } from './components/CertificateDisplay';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';
import { Badges } from './components/Badges';
import { DisplayImage } from './components/DisplayImage';
import { Experience }  from './components/Experience';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <DisplayImage />
      <Skills />
      <CertificatePage />
      <Badges />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;