import styled from 'styled-components/macro';
import {Link as LinkR} from 'react-router-dom';
import {Link as Links} from 'react-scroll';


export const SidebarContainer= styled.aside`
position: fixed;
z-index:10;
width: 100%;
height: 100%;
background:#344755;
display: grid;
align-items: center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0':'-100%')};
`;

export const CloseIcon = styled.div`
color:#fff;
`;

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right: 1.5rem;
background: transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;

export const SidebarWrapper = styled.div`
color:#fff;
`;

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align:center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6,60px);
}
`;

export const SidebarLink= styled(Links)`
display: flex;
align-items: center;
justify-content:center;
font-size: 1.5rem;
text-decoration:none;
list-style: none;
transition: 0.2s ease-in-out;
cursor:pointer;

&:hover{
    color:#eeb85a;
    transition:0.2s ease-in-out;
}
`;

export const SideBtnWrap =styled.div`
display:flex;
justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
border-radius:50px;
background: #343434;
white-space: nowrap;
padding: 16px 64px;
color:#f3f7f7;
font-size: 16px;
outline:none;
border:white solid 1px;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color:#010606;
}
`;