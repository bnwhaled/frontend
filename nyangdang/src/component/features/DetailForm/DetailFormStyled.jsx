import styled from "styled-components";

const StContainer = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  gap:12px;
`;

const StImg = styled.div`
  background-color: gray;
  width:40%;
  height:60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBoxRight = styled.div`
  width:40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap:12px;
`;

const StContent = styled.div`
  background-color: antiquewhite;
  width:90%;
  height:40%;
`;
const StComment = styled.form`
  background-color: skyblue;
  width:90%;
  height:50%;
`;
const StWriteBox = styled.div`
  width:90%;
  height:10%;
  display: flex;
  align-items: center;
`;
const StLabel = styled.label`
  width:15%;
`;
const StInput = styled.input`
  display: block;
  width:85%;
  height: 36px;
  border: solid 1px #dadada;
  padding: 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
`;

export { StContainer, StImg, StBoxRight, StContent, StComment, StWriteBox, StInput, StLabel };
