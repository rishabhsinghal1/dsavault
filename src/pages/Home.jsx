import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Middle from "../components/Middle";
import { SelectContextProvider } from "../context/SelectContext";
import Bottom from "../components/Bottom";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <SelectContextProvider>
        <Middle />
      </SelectContextProvider>
      <Bottom/>
    </div>
  );
};

export default Home;
