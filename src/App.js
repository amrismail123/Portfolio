
import './App.css';
import NavigationBar from './components/navBar';
import Fsection  from './components/fmain';
import Skills from './components/skills';
import NavPills from './components/navPills';
import Projects from './components/projects'
import Projects2 from './components/project2';
import Contact   from './components/contact'
import Lsection from './components/Lsection';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Fsection />
      <Skills />
      <NavPills />
      <Projects />
      <Projects2 />
      <Contact />
      <Lsection />
      <Footer />
    </div>
  );
  }

export default App;
