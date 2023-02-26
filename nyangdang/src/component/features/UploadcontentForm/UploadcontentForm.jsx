import React from "react";
import { StContentWrap, StImagebox } from "./UploadcontentFormStyled";

function UploadcontentForm() {
  return (
    <>
      <StContentWrap>
        글 작성하기
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* 이미지 추가 */}
        <StImagebox>
          <button>Add image</button>
        </StImagebox>
        <input placeholder="내용입력하기..." type="text" />
        <button>취소</button>
        <button>완료</button>
      </StContentWrap>
    </>
  );
}

export default UploadcontentForm;
