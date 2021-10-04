import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
       <Switch>
       <Route exact path="/">
         <Home></Home>
         </Route>
         <Route exact path="/home">
         <Home></Home>
         </Route>
         <Route exact path="/services">
          <Services></Services>
         </Route>
         <Route exact path="/about">
          <About></About>
         </Route>
         <Route exact path="/contact">
          <Contact></Contact>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
