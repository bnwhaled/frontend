import { StContentWrap } from "./MainFormStyled";
import Header from "../../ui/Header/Header";
import React from "react";
import { Link } from "react-router-dom";

function MainForm() {
  return (
    <div>
      <Header>
        <div>NyangDang</div>
      </Header>

      <StContentWrap>
        <Link to={`/uploadcontent/`}>
          <button>댕냥 자랑하기</button>
        </Link>
        <div>
          {/* 사진1,2번째줄 */}
          <div>
            <Link to={`/detail/`}>
              <button>
                a<div>♥</div>
              </button>
            </Link>
            <button>
              b<div>♥</div>
            </button>
            <button>
              c<div>♥</div>
            </button>
          </div>
          <div>
            <button>
              d<div>♥</div>
            </button>
            <button>
              e<div>♥</div>
            </button>
            <button>
              f<div>♥</div>
            </button>
          </div>
        </div>
      </StContentWrap>
    </div>
  );
}

export default MainForm;
