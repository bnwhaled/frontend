import React from "react";
import { useNavigate } from "react-router-dom";
import { StContainer } from "./HeaderStyled";

function Header() {
  const navigate = useNavigate();
<<<<<<< HEAD
  return <StContainer>
    <h3 onClick={()=>navigate('/')}> Dangnyang</h3>
    </StContainer>;

}
=======
  return (
    <StContainer>
      <h3 onClick={() => navigate("/")}> Dangnyang</h3>
    </StContainer>
  );
}

>>>>>>> 360585bf0beb73b964e6b75c15a21140680a511b
export default Header;
