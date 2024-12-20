import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Main;
