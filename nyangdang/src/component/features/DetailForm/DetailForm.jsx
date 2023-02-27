import React from "react";
import {
  StContainer,
  StImg,
  StBoxRight,
  StComment,
  StContent,
  StWriteBox,
  StInput,
  StLabel
} from "./DetailFormStyled";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../ui/Header/Header";


function DetailForm() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <StContainer>
        <StImg>+image</StImg>
        <StBoxRight>
          <StContent></StContent>
          <StComment></StComment>
          <StWriteBox>
            <StLabel>댓글 작성</StLabel>
            <StInput />
          </StWriteBox>
        </StBoxRight>
      </StContainer>
    </>
  );
}

export default DetailForm;
