//axios 요청 들어가는 모든 모듈
import axios from "axios";

//조회
const getblogs = async () => {
  const response = await axios.get(`${process.env.REACT_APP_URL}/blogs`);

  return response.data;
};

export { getblogs };
