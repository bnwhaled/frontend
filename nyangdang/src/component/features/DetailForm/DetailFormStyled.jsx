import styled from "styled-components";

const StContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StBoxWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const StBoxWrap2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const StButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const StimageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  padding: 30px;
`;

const StContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80px;
  border: 1px solid black;
  padding: 10px;
`;
const StCommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  border: 1px solid black;
  padding: 10px;
`;

const StAddCommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StInputBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 150px;
  height: 10px;
`;

export {
  StContentWrap,
  StBoxWrap,
  StBoxWrap2,
  StButtonWrap,
  StimageBox,
  StContentBox,
  StCommentBox,
  StAddCommentBox,
  StInputBox,
};
