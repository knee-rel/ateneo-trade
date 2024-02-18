import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
