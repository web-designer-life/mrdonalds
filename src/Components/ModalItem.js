import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: white;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    background-image: url(${({img}) => img});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 200px;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 20px 53px 43px 37px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Pacifico;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 53px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
    function closeModal(evt) {
        if (evt.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) return null;
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{openItem.price}₽</div>
                    </HeaderContent>
                    <ButtonCheckout>Добавить</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )
};