import axios from "axios";
import React, { useState } from "react";
import useInput from "../../../hook/useInput";
import Header from "../../ui/Header/Header";
import { StContentWrap, StImagebox, StImgInput, StImgInputAdd, StImgLabel, StInput, StButton, StContainer, StLabel, StInputContent, StContentBox, StBtnBox, StTitleBox } from "./UploadcontentFormStyled";

function UploadcontentForm() {
  const [title, changeTitle] = useInput();
  const [content, changeContent] = useInput();
  const [imgInput, setImgInput] = useState("");


  const onChangeImgInputHandler = (e) => {
    if(imgInput) return; // img 추가 한 번만 가능하게 하기
    setImgInput(e.target.value);
  }

  const addBlog = async() => {
    await axios.post('', {
      title:'title',
      contents:'contents',
      image:""
    })
  }
  

  return (
    
    <>
    <Header />
    <StContainer>
      <StContentWrap>
          <h3>글 작성하기</h3>
          <StTitleBox>
            <StLabel htmlFor="title"> 제목 </StLabel>
            <StInput id="title" onChange={changeTitle} type={title} placeholder="제목을 입력하세요" />
          </StTitleBox>
          <StImagebox>
            <StImgLabel htmlFor="file">
              파일 첨부
            </StImgLabel>
            <StImgInput 
              type="file" 
              id="file" 
              accept="image/png, image/jpeg"
              required
            />
          </StImagebox>
          <StInputContent value={content} onChange={changeContent} placeholder="내용입력하기..." type="text" />
          <StBtnBox>
            <StButton>취소</StButton>
            <StButton>완료</StButton>
          </StBtnBox>
        </StContentWrap>
    </StContainer>
    </>
  );
}

export default UploadcontentForm;

{/* <StImgInputAdd className="uploadName" placeholder="이미지 첨부하기"/>
  <StImgInput 
    id="file" 
    value={imgInput} 
    onChange={onChangeImgInputHandler} 
    type="file" 
    accept='image/jpg,image/png, image/gif'
  />
  <StImgLabel htmlFor="file">파일 찾기</StImgLabel> */}