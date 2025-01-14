import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar";
import { ContactCard } from "./components/ContactCard/ContactCard";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}> 
      <Navbar />
      <ContactCard />
      <About />
      <Experience />
      <Projects />
      {/* <CopyRightTag /> */}
    </div>
  )
}

export default App
