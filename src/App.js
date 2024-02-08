import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

//screens
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full">
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
};

export default App;
