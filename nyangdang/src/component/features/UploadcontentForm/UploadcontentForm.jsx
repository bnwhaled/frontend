import axios from "axios";
import React from "react";
import useInput from "../../../hook/useInput";
import Header from "../../ui/Header/Header";
import { StContentWrap, StImagebox, StImgInput, StInput, StButton, StContainer, StLabel, StInputContent, StContentBox, StBtnBox, StTitleBox } from "./UploadcontentFormStyled";

function UploadcontentForm() {
  const [title, changeTitle] = useInput();
  const [content, changeContent] = useInput();
  const [imgInput, changeImgInput] = useInput();

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
            <StImgInput value={imgInput} onChange={changeImgInput} type="file" placeholder="+ 이미지 첨부하기"/>
          </StImagebox>
          <StInputContent value={title} onChange={changeContent} placeholder="내용입력하기..." type="text" />
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
