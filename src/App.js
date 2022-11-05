import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
// import Creation from "./Components/Creation/Creation"
import News from "./Components/News/News";

function App() {
  return (
    <div className="App">
      <Header/>
      <News/>
      {/* <Creation/> */}
    </div>
  );
}

export default App;
