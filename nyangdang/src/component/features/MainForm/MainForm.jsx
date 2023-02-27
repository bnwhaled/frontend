import { StContentWrap, StImageBoxWrap } from "./MainFormStyled";
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

  return (
    <div>
      <Header>
        <div>NyangDang</div>
      </Header>
      <StContentWrap>
        <Link to={`/uploadcontent/`}>
          <button>댕냥 자랑하기</button>
        </Link>

        {/* 사진1,2번째줄 */}
        {data.map((v) => (
          <StImageBoxWrap key={v.id}>
            <Link to={`/detail/${v.id}`}>
              <div>
                {/* 사진 */}
                {v.title}
                <div>
                  {/* 하트 */}
                  {v.author}
                </div>
              </div>
            </Link>
          </StImageBoxWrap>
        ))}

        {data.map((v) => (
          <StImageBoxWrap key={v.id}>
            <Link to={`/detail/${v.id}`}>
              <div>
                {/* 사진 */}
                {v.title}
                <div>
                  {/* 하트 */}
                  {v.author}
                </div>
              </div>
            </Link>
          </StImageBoxWrap>
        ))}
      </StContentWrap>
    </div>
  );
}

export default MainForm;
