import React from 'react';
import styled from 'styled-components';

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
    margin: 0 0 20px 0;
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
                {openItem.name}
            </Modal>
        </Overlay>
    )
};