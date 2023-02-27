import React from "react";
import { useNavigate } from "react-router-dom";
import { StContainer } from "./HeaderStyled";

function Header() {
<<<<<<< HEAD
  const navigate = useNavigate();
  return <StContainer>
    <h3 onClick={()=>navigate('/')}> Dangnyang</h3>
    </StContainer>;
=======
  return <StContainer>Dangnyang</StContainer>;
>>>>>>> 99c13daaa632af8402ac993b202b03eae08b92c2
}

export default Header;
