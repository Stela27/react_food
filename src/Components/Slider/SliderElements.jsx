import styled from 'styled-components';
import {Link as LinkR} from 'react-scroll';
import hero1 from '../../images/hamburgesa-1.png';

export const HeroContenedor =styled.div`
padding-top: 100px;
width:100%;
height:650px;
background:#344755;
justify-content: center;

@media screen and (max-width:720px){
    height:auto;
}
`;

// export const Icons= styled.div`
//     height:100%;
//     width: 100%;
//     display:flex;
//     flex-direction: column;
//     justify-content:center;
//     padding: 20px;
//     font-size:1.8rem;
//     cursor:pointer;
//     /* padding:20px; */
//     color:#ffff;
    
// `;


export const HeroContainer=styled.div`
display:flex;
height:100%;
width:100%;
`;

export const HeroImg=styled.div`
justify-content:center;
justify-self: center;
width:100%;
height: 420px;
top:50px;
background-image: url(${hero1});

@media screen and (max-width:720px){
    height: 400px;
    margin-bottom:20px;
}
`;
// boton ver menu
export const SliderBtn = styled.nav`
display: flex;
align-items:center;
`;

export const SliderBtnLink= styled(LinkR)`
border-radius: 50px;
background: #f8f8f8;
white-space:nowrap;
padding:10px 22px;
color:#080808;
font-size:16px;
outline:none;
border:1px solid #fff;
cursor: pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #344755;
    color:#ffff;
}
`;