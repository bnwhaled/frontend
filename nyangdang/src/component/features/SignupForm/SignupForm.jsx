import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useCookies } from "react-cookie";
import useInput from "../../../hook/useInput";
import { StContainerForm, StInput, StLabel, StIdBox, StPwBox, StContainer, StInputBox, StButtonCheck, StButton } from "./SignupFormStyled";
import { useCallback, useState } from 'react';

function SignupForm() {
  const navigate = useNavigate();

  const [userId, changeUserId ] = useInput((e)=>e);
  const [userPw, changeUserPw ] = useInput((e)=>e);
  const [isPwConfirm, setIsPwConfirm] = useState(false);
  const [pwConfirm, changePwConfirm, resetPwConfirm] = useInput((e)=>e);
  const [cookies, setCookies] = useCookies(['user']);

  const BASE_URL = "http://3.35.136.146:8080/api";

  const pwCheck = () => {
    if(userPw !== pwConfirm){
      alert("비밀번호가 일치하지 않습니다");
      resetPwConfirm();
    } else {
      setIsPwConfirm(true);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if(userId === ""){
      alert ("아이디를 입력해주세요");
      return;
    }
    if( userPw === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if(pwConfirm === "") {
      alert("비밀번호확인을 입력해주세요");
      return;
    }
    pwCheck();
    if(!isPwConfirm) return;

    const body = {
      username: userId,
      password: userPw,
    };
    await axios.post(`${BASE_URL}/auth/signup`, body, {
      withCredentials: true,
    })
    .then((res) => {
      setCookies('user', res.data.id);
      console.log("res1",res);
      alert("회원가입 성공");
      return res;
      // navigate('/login');
    })
    .catch((error)=>{
      console.log(error);
      return error;
    })
    // console.log("res2",response);
  }




  const keyDownHandler = (e) => {
    if(e.key === "Enter") {return submitHandler};
  }

  return (
    <StContainer>
      <h3>회원가입</h3>
      <StContainerForm onSubmit={submitHandler}>
        <StIdBox>
          <StLabel htmlFor='id'> 아이디 
            <StInputBox>
              <StInput 
                id="id"
                type="text"
                placeholder='아이디를 입력하세요'
                value={userId}
                onChange={changeUserId}
              />
            </StInputBox>
          </StLabel>
          <StButtonCheck> 중복확인 </StButtonCheck>
        </StIdBox>
        <StPwBox>
          <StLabel htmlFor='pw'> 비밀번호 
            <StInputBox>
              <StInput 
                id="pw"
                type="password"
                placeholder='비밀번호를 입력하세요' 
                value={userPw}
                onChange={changeUserPw}
              />
            </StInputBox>
          </StLabel>
            <StLabel htmlFor='pwConfirm'> 비밀번호 확인  
              <StInputBox>
                  <StInput 
                    placeholder="비밀번호를 다시 입력해주세요" 
                    id="pwConfirm"
                    type="password"
                    value={pwConfirm}
                    onChange={changePwConfirm}
                    onKeyDown={keyDownHandler}
                  />
              </StInputBox>
            </StLabel>
        </StPwBox>
        <StButton type="submit"> 회원가입 </StButton>
      </StContainerForm>
    </StContainer>
  )
}

export default SignupForm;
