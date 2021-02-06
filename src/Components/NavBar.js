import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
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

const TextSign = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="Логотип"/>
            <H1>MRDonald’s</H1>
        </Logo>
        <Sign>
            <ImgSign src={signImg} alt="Войти"/>
            <TextSign>войти</TextSign>
        </Sign>
    </NavBarStyled>
);