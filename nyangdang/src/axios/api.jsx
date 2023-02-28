//axios 요청 들어가는 모든 모듈
import axios from "axios";

//조회
const getblogs = async () => {
  // const response = await axios.get(`${process.env.REACT_APP_URL}/blogs`);
  const response = await axios.get(`${process.env.REACT_APP_URL}/api/blogs/`);

  return response.data;
};

const postblogs = async (newComment) => {
  await axios.post(
    `${process.env.REACT_APP_URL}/api/blogs/${newComment.id}/comment/`,
    newComment
  );
};
export { getblogs, postblogs };
