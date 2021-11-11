import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Partners from './pages/Partners';
import Footer from './components/Footer';
import Attribution from './components/Attribution';
import OurService from './pages/OurService';
import Gallery from './pages/Gallery'
import Contact from './pages/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
	  <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/ourservice"
          render={(routeProps) => <OurService {...routeProps} />}
        />
        {/* <Route
						exact
						path="/plan"
						render={routeProps => <Plan {...routeProps} />}
					/> */}
      </Switch>
	  </AnimatePresence>
      <Footer />
      <Attribution />
    </>
  );
}

export default App;
