import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
/* import ProductCard from "../Products/productCard"; */
import { useDispatch, useSelector } from "react-redux"
import Header from "./Header";
import MetaData from "../../component/more/Metadata";

import Loading from "../more/Loader";



const Home = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [])

  return (
    <>
            
          <>
            <MetaData title="Home" />
  
            {/* Carousel */}
            <div className="banner">
              <Carousel>
                <img src="https://picsum.photos/200/300" className="bgImg" alt='' />
                <img src="https://picsum.photos/200/300" className="bgImg" alt='' />
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




           
          
           
          </>
      
    </>
  );
};

export default Home;