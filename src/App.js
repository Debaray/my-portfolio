import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/Shared/NavBar/NavBar';
import Projects from './components/Projects/Projects/Projects';
import Blogs from './components/Blogs/Blogs';

import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/aboutme">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/contactme">
            <ContactMe></ContactMe>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
   
    </div>
  );
}

export default App;
