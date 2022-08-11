import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
/* import ProductCard from "../Products/productCard"; */
import MetaData from "../../component/more/Metadata";
import bg from "../../Assets/background.jpg";
import bg2 from "../../Assets/background2.jpg";
import bg3 from "../../Assets/background3.jpg";
import bg4 from "../../Assets/background4.jpg";
import "./Home.css"
import { Link } from "react-router-dom";



const Home = () => {
  


  useEffect(() => {
    
  }, [])

  return (
    <>
            
          <>
            <MetaData title="Inicio" />
  
            {/* Carousel */}
            <div className="banner">
              <Carousel>
                <img src={bg3} className="bgImg" alt='' />
                <img src={bg2} className="bgImg" alt='' />
                <img src={bg4} className="bgImg" alt='' />
                <img src={bg} className="bgImg" alt='' />
              </Carousel>
              <div className="home__content">
                <div style={{
                  display: "flex",
                  alignItems: "center", 

                  
                }}>
                  <h2 style={{
                      fontSize: "3em",
                      fontFamily: "Poppins,sans-serif",
                      color: "#fff",
                  }}>Lo último en equipos</h2>
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
                    // fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    lineHeight: "1.7"
                  }}>Sin interés</h2>
                </div>
                <div>
                  <Link to="/products">
                    <button className='button-85' type="submit">¡ Ver más !</button>
                  </Link>
                </div>
              </div>
            </div>           
          </>
      
    </>
  );
};

export default Home;