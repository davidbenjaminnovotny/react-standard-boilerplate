import React from 'react';
import './tailwind.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Header from './components/components/header'
import Homepage from './components/containers/homepage'
import About from './components/containers/aboutpage'
import Footer from './components/components/footer'
import ProductPage from "./components/containers/productpage";
import ProductsPage from "./components/containers/productspage";

function App() {
  return (
    <div className="App">
        <Router>
        <Header/>

            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/product/:id">
                    <ProductPage/>
                </Route>
                <Route path="/products">
                    <ProductsPage/>
                </Route>
            </Switch>
        </Router>
     <Footer/>

    </div>
  );
}

export default App;
