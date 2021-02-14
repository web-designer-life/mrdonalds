import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    min-height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    margin: 0 0 0 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Sign = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: white;
    font-size: 16px;
`;

const ImgSign = styled.img`
    width: 32px;
`;

const ImgUser = styled.img`
    width: 50px;
    border-radius: 50px;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

const LogOut = styled.span`
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin: 0 15px 0 0;
`;

const Figure = styled.figure`
    margin: 0 30px;
`;

export const NavBar = () => {
    const { auth: { authentication, logIn, logOut } } = useContext(Context);
    console.log(authentication);
    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="Логотип"/>
                <H1>MRDonald’s</H1>
            </Logo>
            {authentication ? 
            <User>
                <Figure>
                    <ImgUser src={authentication.photoURL} alt={authentication.displayName}/>
                    <figcaption>{authentication.displayName}</figcaption>
                </Figure>
                <LogOut title="Выйти" onClick={logOut}>X</LogOut>
            </User>
            : 
            <Sign onClick={logIn}>
                <Figure>
                    <ImgSign src={signImg} alt="Войти"/>
                    <figcaption>войти</figcaption>
                </Figure>
            </Sign>
            }
        </NavBarStyled>
    )
};
