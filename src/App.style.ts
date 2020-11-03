import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle `
html {
    height:100%
}

body{
    background-image:url(${BGImage});
    background-size:cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;
    font-family: 'Barlow Condensed', sans-serif;
    color:#33272A;
}

*{
    box-sizing:border-box;
    
}
`
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center

>p{
    color:#fff;
}

.number {
    font-weight:bold;
    font-size:30px,
}
.score{
    color:#fff;
    font-size:2em;
    margin:0;
}

h1{
    font-family:'Henny Penny', cursive;;
  background-image: linear-gradient(180deg, #fff,#56ffa4);
  background-size:100%;
  background-clip:text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  -moz-background-clip:text;
  -moz-text-fill-color:transparent;
  filter:drop-shadow(2px 2px #0085a3);
  font-size:70px;
  text-align:center;
  margin:20px
}

.start, .next{
    cursor:pointer;
    background:linear-gradient(180deg, #fff,#ffcc91);
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius:10px;
    height:40px;
    margin:20px 0;
    padding:0;
}
`