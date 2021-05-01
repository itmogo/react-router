import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import ServiceDetails from './pages/ServiceDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Navbar from './components/Navbar';
function Router() {
    return (
        <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  exact path="/about"  component ={About} />
                    <Route  exact path="/contact" component={Contact} />
                    <Route  exact path="/services"  component={Services}/>
                    <Route  exact path="/services/:id" component={ServiceDetails} />
                    <Route  component={NotFoundPage} />                    
                </Switch>
        
            
        </BrowserRouter>
    )
}

export default Router;
