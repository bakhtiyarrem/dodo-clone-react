import React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/HomePage/HomePage";
import {Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";


function App() {
    return (
        <div className="App">
            <Header />
            <Nav/>
            <main>
                <Route path="/" component={HomePage} exact />
                <Route path="/cart" component={Cart} exact />
            </main>
        </div>
    );
}

export default App;
