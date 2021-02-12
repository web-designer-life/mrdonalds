import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { Preloader } from './Preloader';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin: 80px 0 0 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({ setOpenItem, dbMenu }) => (
    <MenuStyled>
        <Banner/>
        {dbMenu ? 
            <>
                <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem 
                        itemList={dbMenu.burger}
                        setOpenItem={setOpenItem}
                    />
                </SectionMenu>

                <SectionMenu>
                    <h2>Закуски / Напитки</h2>
                    <ListItem 
                        itemList={dbMenu.other}
                        setOpenItem={setOpenItem}
                    />
                </SectionMenu>
            </> :
            <Preloader />
        }
    </MenuStyled>  
);
