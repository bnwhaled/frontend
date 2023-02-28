import styled from "styled-components";

<<<<<<< HEAD
const StHeader = styled.header`
  background-color: beige;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StContentWrap = styled.div`
=======
const StAddContentBtn = styled.button`
  background-color: #9f4c4c;
  color: white;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-color: beige;
`;

const StContainer = styled.div`
>>>>>>> 360585bf0beb73b964e6b75c15a21140680a511b
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
<<<<<<< HEAD
`;

const StImageBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export { StHeader, StContentWrap, StImageBoxWrap };
=======
  position: relative;
  width: 100%;
  height: auto;
  /* overflow: scroll; */
`;

const StContentWrap = styled.div`
  position: relative;
  margin: auto;
  width: 80%;

  /* height: 100%; */
  padding: 50px;
  border: 1px solid purple;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* overflow: hidden; */
`;

const StOutsideImgBoxWrap = styled.div`
  /* display: flex;
  justify-content: center; */
  width: 80%;
  height: 80%;
  /* float: left; */
  display: inline-block;
`;
const StImageBoxWrap = styled.div`
  position: relative;
  margin: 30px;
  width: 100%;
  height: 100%;

  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 70px;

  /* 좌우 붙이기(갭으로) */
  /* gap으로 조절하는게 더정확함 */
  justify-content: space-between;
`;

const Stimg = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border: 1px solid green;
`;

export {
  StContentWrap,
  StImageBoxWrap,
  StAddContentBtn,
  StOutsideImgBoxWrap,
  Stimg,
  StContainer,
};
>>>>>>> 360585bf0beb73b964e6b75c15a21140680a511b
