import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ContentContainer from "./containers/ContentContainer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <ContentContainer />
    </BrowserRouter>
  );
}

export default App;
