import React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import HomePageContainer from "./components/HomePage/HomePageContainer";


function App() {
    return (
        <div className="App">
            <Header />
            <Nav/>
            <main>
                <HomePageContainer />
            </main>
        </div>
    );
}

export default App;
