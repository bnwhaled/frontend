import React, { useState } from "react";
import { getblogs } from "../../../axios/api";
import { useQuery } from "react-query";

import {
  StBoxWrap,
  StBoxWrap2,
  StButtonWrap,
  StContentWrap,
  StimageBox,
  StCommentBox,
  StAddCommentBox,
  StContentBox,
  StInputBox,
} from "./DetailFormStyled";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailForm() {
  const [comment, setComment] = useState;
  const addCommentHander = (e) => setComment(e.target.value);
  console.log(comment);
  const params = useParams();
  const findTodo = data.find((value) => value.id === Number(params.id));
  const navigate = useNavigate();
  const { isLoding, isError, data } = useQuery("blogs", getblogs); //인자: 이름, 가져올데이터명
  if (isLoding) return <h3>Loding...</h3>;
  if (isError) return <h3>Error occur</h3>;
  console.log(data);

  return (
    <div>
      <div>
        {" "}
        <button onClick={() => navigate(-1)}>Back</button> Detail
      </div>
      <StContentWrap>
        <StBoxWrap key={data}>
          <div>
            {/* 사진 */}
            <StimageBox>image {findTodo.title}</StimageBox>
          </div>
          <StBoxWrap2>
            {/* 내용 */}
            <StContentBox>내용</StContentBox>
            <StCommentBox>댓글</StCommentBox>
            <StInputBox
              value={comment}
              placeholder="댓글작성"
              type="text"
              onChange={(e) => addCommentHander(e)}
            />
          </StBoxWrap2>
        </StBoxWrap>
        <StButtonWrap>
          <Link to={`/Fixcontent`}>
            <button>수정</button>
          </Link>
          <button>삭제</button>
        </StButtonWrap>
      </StContentWrap>
    </div>
  );
}

export default DetailForm;
