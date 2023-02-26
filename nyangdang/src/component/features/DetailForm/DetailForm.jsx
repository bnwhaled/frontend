import React from "react";
import {
  StBoxWrap,
  StBoxWrap2,
  StButtonWrap,
  StContentWrap,
} from "./DetailFormStyled";
import { Link, useNavigate } from "react-router-dom";

function DetailForm() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {" "}
        <button onClick={() => navigate(-1)}>Back</button>{" "}
      </div>
      <StContentWrap>
        Detail
        <StBoxWrap>
          <div>
            <div>image</div>
          </div>
          <StBoxWrap2>
            <div>내용</div>
            <div>댓글</div>
            <input placeholder="댓글작성" type="text" />
          </StBoxWrap2>
        </StBoxWrap>
        <StButtonWrap>
          <Link to={`/Fixcontent`}>
            <button>수정</button>
          </Link>
          <button>삭제</button>
        </StButtonWrap>
      </StContentWrap>
    </>
  );
}

export default DetailForm;
