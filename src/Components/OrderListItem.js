import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trash.svg';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin: 0 10px 0 20px;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const OrderListItem = () => (
    <OrderItemStyled>
        <ItemName>JS Burger</ItemName>
        <span>2</span>
        <ItemPrice>850₽</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
);