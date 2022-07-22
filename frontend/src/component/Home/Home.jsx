import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/background.jpg";
import bg2 from "../../Assets/background2.jpg";
import ProductCard from "../Products/productCard";
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer from "../../Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error])

  return (
    <>
      {loading ? (
        <Loading />
      )
        : (
          <>
            <MetaData title="Home" />
            <Header />
            {/* Carousel */}
            <div className="banner">
              <Carousel>
                <img src={bg} className="bgImg" alt='' />
                <img src={bg2} className="bgImg" alt='' />
              </Carousel>
              <div className="home__content">
                <div style={{
                  display: "flex",
                  alignItems: "center",
                }}>
                  <h2 style={{
                    fontFamily: "roboto",
                    fontSize: "3em",
                    fontWeight: "500",
                    color: "#fff"
                  }}>Lo ultimo en equipos</h2>
                </div>
                <div>
                  <h2 style={{
                    fontSize: "4.5em",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                  }}>Hasta 12 cuotas</h2>
                </div>
                <div>
                  <h2 style={{
                    fontSize: "4.5em",
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    lineHeight: ".7"
                  }}>Sin interes</h2>
                </div>
                <div>
                  <a href="#container">
                    <button type="submit" style={{
                      width: "135px",
                      height: "50px",
                      border: "none",
                      background: "#88d317",
                      margin: "10px 0",
                      fontSize: "1.2vmax",
                      color: "black",
                      cursor: "pointer"
                    }}
                      className="Home__button"
                    >Ver mas</button>
                  </a>
                </div>
              </div>
            </div>




            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Footer />
            <BottomTab />
          </>
        )}
    </>
  );
};

export default Home;
