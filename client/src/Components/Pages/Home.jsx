import React from "react";
import Imagebg from "../Pieces/Imagebg";
import Pieces1 from "../Pieces/Pieces1";
import Homecard1 from "../Pieces/Homecard1";
import Homepiece1 from "../Pieces/Homepiece1";
import Homepiece2 from "../Pieces/Homepiece2";
import Homepiece3 from "../Pieces/Homepiece3";

const Home = () => {
  return (
    <div>
     <Imagebg/>
     <Homepiece2/>
     <Homecard1/>
     <Homepiece1/>
     
     {/*<Pieces1/>
     <Homepiece3/>*/}
    </div>
  );
};

export default Home;
