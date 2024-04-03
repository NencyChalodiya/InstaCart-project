import React from "react";
import Navbar from "../components/LandingPageComponents/Navbar";
import Wrapper from "../components/LandingPageComponents/Wrapper";
import Store from "../components/LandingPageComponents/Store";
import ScannerWrapper from "../components/LandingPageComponents/ScannerWrapper";
import GroceryDelivery from "../components/LandingPageComponents/GroceryDelivery";
import Publicity from "../components/LandingPageComponents/Publicity";
import QuestionAnswers from "../components/LandingPageComponents/QuestionAnswers";
import Footer from "../components/LandingPageComponents/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Wrapper />
      <Store/>
      <ScannerWrapper/>
      <GroceryDelivery/>
      <Publicity/>
      <QuestionAnswers/>
      <Footer/>
    </>
  );
};

export default Home;
