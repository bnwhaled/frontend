import {
  StContentWrap,
  StImageBoxWrap,
  StAddContentBtn,
  StOutsideImgBoxWrap,
  Stimg,
  StContainer,
  StBtnWrap,
} from "./MainFormStyled";
import Header from "../../ui/Header/Header";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getblogs } from "../../../axios/api";
import { useQuery } from "react-query";

function MainForm() {
  const { isLoading, isError, data } = useQuery("blogs", getblogs); //인자: 쿼리키,데이터(비동기함수)
  if (isLoading) return <h3>Loding...</h3>;
  if (isError) return <h3>Error occur</h3>;
  console.log(data);
  //test

  return (
    <div>
      <Header />
      <StContainer>
        <StBtnWrap>
          <Link to={`/uploadcontent/`}>
            <StAddContentBtn>댕냥 자랑하기</StAddContentBtn>
            {/* <img
              src="https://item.kakaocdn.net/do/e3fb5ac2357015ff769d9dfd01b017b9f43ad912ad8dd55b04db6a64cddaf76d"
              alt="dog"
            /> */}
          </Link>
          {/* 사진1,2번째줄 */}
        </StBtnWrap>
        <StContentWrap>
          <StOutsideImgBoxWrap>
            <StImageBoxWrap>
              {data.map((v) => (
                <div key={v.id}>
                  <Link to={`/detail/${v.id}`}>
                    {/* 사진 */}
                    <Stimg src={v.imageUrl} />
                  </Link>
                </div>
              ))}
            </StImageBoxWrap>
            <StImageBoxWrap>
              {data
                .filter((v) => v.imageUrl === true)
                .map((v) => (
                  <div key={v.id}>
                    <Link to={`/detail/${v.id}`}>
                      {/* 사진 */}
                      {/* <img src={v.imageUrl} />   */}
                    </Link>
                  </div>
                ))}
            </StImageBoxWrap>
          </StOutsideImgBoxWrap>
        </StContentWrap>
      </StContainer>
    </div>
  );
}

export default MainForm;
