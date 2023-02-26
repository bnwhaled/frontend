import styled from "styled-components";

const StContainer = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
`;

const StContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:600px;
  height:100%;
  padding-top: 68px;
  h3 {
    font-size:32px;
  }
`;

const StImagebox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
`;
const StLabel = styled.label`
  width:10%;
  font-size:22px;
`;
const StImgInput = styled.input`
  background-color: green;
`;
const StTitleBox = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
`;
const StInput = styled.input`
  width:90%;
  display: block;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px;
  box-sizing: border-box;
  background: #fff;
`;

const StInputContent = styled.textarea`
  width:100%;
  height:300px;
  padding:10px;
  box-sizing: border-box;
`;
const StButton = styled.button`
  background-color: black;
  color: white;
  border:none;
  padding:16px 10px;
  cursor: pointer;
  margin-top:12px;
  width:50%;
`;
const StBtnBox = styled.div`
  display:flex;
  gap:12px;
  width:100%;
`;


export { StContentWrap, StContainer, StImagebox, StImgInput, StInput, StButton, StLabel, StInputContent, StBtnBox, StTitleBox };
