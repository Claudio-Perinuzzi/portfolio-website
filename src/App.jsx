import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar";
import { ContactCard } from "./components/ContactCard/ContactCard";
import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Project } from "./components/Project/Project";
import { Footer } from "./components/Footer/Footer";
import { Posts } from "./components/Posts/Posts";

import { experienceData } from './components/Experience/experienceData';
import { projectData } from './components/Project/projectData';

function App() {
  return (
    <div className={styles.App}> 
      <Navbar />
      <ContactCard />
      <About />
      <Education />
      <Experience  experiences={experienceData}/>
      <Project projects={projectData}/>
      <Posts />
      <Footer />
    </div>
  )
}

export default App
