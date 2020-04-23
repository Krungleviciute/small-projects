import React from "react";
import "./App.css";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
