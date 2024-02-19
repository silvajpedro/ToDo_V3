import styled, { createGlobalStyle, css } from "styled-components";

export const flexDirectionCenter = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  color: #ffff;
}
p{
    font-size: 1.6vw;
}
body{
  padding-top: 12vh;
  background-color: #2B2D42;
}
body::-webkit-scrollbar {
  width: 10px;               
}
body::-webkit-scrollbar-track {
  background: #000000;        
}

body::-webkit-scrollbar-thumb {
  background-color:#4DB876;  
  border-radius: 20px;       
}
`;
export const Main = styled.main`
  ${flexDirectionCenter}
  padding-bottom: 30px;
`;

export const TitleBox = styled.div`
  ${flexDirectionCenter}
  /* border: solid; */
  h1 {
    font-family: "Permanent Marker", sans-serif;
    font-size: 2.6vw;
    font-style: italic;
    margin: 5px;
    transition: ease-in-out 0.5s;
    animation: shine 1.2s ease-in-out infinite alternate;
    &:hover,
    &:hover + span {
      letter-spacing: 1px;
      transform: scale(105%);
    }
  }

  span {
    background-color: #4db876;
    width: 15.6vw;
    height: 0.6vh;
    border-radius: 5px;
    transition: ease-in-out 0.5s;
  }

  @keyframes shine {
    from {
      text-shadow: 0 0 2px white, 0 0 4px gray, 0 0 6px white, 0 0 8px gray,
        0 0 10px white, 0 0 12px gray, 0 0 14px white;
    }
    to {
      text-shadow: 0 0 4px white, 0 0 8px gray, 0 0 12px white, 0 0 16px gray,
        0 0 20px white, 0 0 24px gray, 0 0 28px white;
    }
  }
`;

export const AddBox = styled.div`
  width: 46vw;
  height: 24vh;
  margin: 15px 0px 40px 0px;
  button {
    width: 28vw;
    height: 7.5vh;
    color: #000000;
    box-shadow: 2px 2px;
    font-size: 22px;
    font-weight: 700;
    border-radius: 5px;
    background-color: #4db876;
    cursor: pointer;
    &:hover {
      transform: scale(106%);
    }
  }

  form {
    ${flexDirectionCenter}
    justify-content: space-around;
    height: 22vh;
  }
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44vw;
  height: 11vh;
  input {
    height: 60px;
    padding-left: 12px;
    width: 38vw;
    border-radius: 10px;
    border: none;
    background-color: #262626;
    color: #ffff;
    font-size: 25px;
    outline: solid #4db876 0px;
    transition: ease-in-out 0.2s;
    &::placeholder {
      color: #ffff;
    }
    &:focus {
      border: none;
      outline: solid #4db876 3px;
    }
    @media (min-width: 1700px) {
      height: 9.5vh;
      &::placeholder {
        font-size: 28px;
      }
    }
  }
  img {
    margin-left: 12px;
    height: 8vh;
    cursor: pointer;
    transition: ease-in-out 0.5s;

    &:hover {
      animation: Select 0.5s linear 0s infinite normal none;
      @keyframes Select {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(5deg);
        }
        100% {
          transform: rotate(-5deg);
        }
      }
    }
  }
`;
export const CaixaTarefas = styled.section`
  ${flexDirectionCenter}
  width: 50%;
  gap: 14px;
`;
export const TarefaMapeadas = styled.section`
  border-radius: 5px;
  ${flexDirectionCenter}
  flex-direction: row;
  justify-content: space-between;
  height: 14vh;
  width: 48vw;
  background-color: #262626;
  transition: ease-in-out 0.5s;
  &:hover {
    background-color: #414041;
  }
  .task {
    width: 26vw;
    display: flex;
    align-items: center;
    height: 13vh;
    padding-left: 10px;
    
  }
`;

export const CaixaBotoes = styled.div`
  ${flexDirectionCenter}
  flex-direction: row;
  justify-content: space-between;
  /* border: solid yellow; */
  width: 20vw;
  margin-right: 6px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border: solid red;  */
    width: 8vw;
  }
  .checkImage,
  .removeImage,
  .timeImage {
    height: 8.4vh;
    cursor: pointer;
    transition: ease-in-out 0.5s;

    &:hover {
      transform: translate(0px, -3.6px);
    }
  }
  .timeImage {
    position: relative;
    left: 1.8vw;
  }
`;
export const MsgVazia = styled.h2`
  font-family: "Permanet Marker", sans-serif;
  ${flexDirectionCenter}
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  color: #ffff;
  height: 11vh;
  animation: Select 1.5s linear 0s infinite normal none;
  @keyframes Select {
    0% {
      transform: scale(100%);
    }
    50% {
      transform: scale(110%);
    }
    100% {
      transform: scale(100%);
    }
  }
`;
