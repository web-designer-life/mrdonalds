import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background-color: white;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 30px 0;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
    
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin: 0 20px 0 0;
`;

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px 35px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders }) => {
    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                {orders.length ? 
                <OrderList>
                    {orders.map(order => <OrderListItem order={order}/>)}
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>850₽</TotalPrice>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
};