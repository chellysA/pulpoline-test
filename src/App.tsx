"use client";
import { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Header from "./components/Header";
import MainLayout from "./components/Layout/MainLayout";
import MyCart from "./components/MyCart";
import OrdersHistorial from "./components/OrdersHistorial";
import Rating from "./components/Rating";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* <Catalogo /> */}
      <MainLayout>
        <Header />
        <section className="grid grid-cols-12 md:mt-10">
          <div className="col-span-full lg:col-span-7 gap-4 flex flex-col lg:mr-10">
            <Banner />
            <Categories />
            <OrdersHistorial />
          </div>
          <div className="flex flex-col col-span-full lg:col-span-5 gap-y-5">
            <Rating />
            <MyCart />
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default App;
