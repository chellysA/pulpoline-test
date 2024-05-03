import Banner from "../Banner";
import Categories from "../Categories";
import Header from "../Header";
import MyCart from "../MyCart";
import Order from "../OrdersHistorial";
import Rating from "../Rating";
import SideBar from "../SideBar";

const Catalogo = () => {
  return (
    <div>
      <SideBar />
      <Header />
      <Banner />
      <Categories />
      <Order />
      <MyCart />
      <Rating />
    </div>
  );
};

export default Catalogo;
