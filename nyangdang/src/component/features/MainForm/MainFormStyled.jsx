import styled from "styled-components";

const StHeader = styled.header`
  background-color: beige;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StImageBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export { StHeader, StContentWrap, StImageBoxWrap };
