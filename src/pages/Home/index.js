import React from "react";
import NavbarComp from "../../components/Navbar";
import * as C from "./styles";
import Schedule from "../../components/Schedule";


const Home = () => {

  
  return (
    <body>
    <main>
      <NavbarComp />
      <C.Container>
        <Schedule />
      </C.Container>
    </main>

    <div class="container">
       
     </div> 
    </body>
  );
};

export default Home;