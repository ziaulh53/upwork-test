import React from "react";
import { HeroSection, Service, WorkCriteria, Faq, Footer, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <Service />
      <WorkCriteria />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
