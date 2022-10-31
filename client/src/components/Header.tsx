import React from "react";
import styled from "styled-components";
import { ItemObjectType } from "./form/types";
import NewItemTogglableForm from "./NewItemTogglableForm";

export type HeaderProps = {
    children: React.ReactNode;
    onItemAdded: (newItem: ItemObjectType) => void;
};

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        background-color: ${(props) => props.theme.colors.grass9};
        color: #fff;
        width: 25px;
        height: 25px;
    }
`;

export const Header: React.FC<HeaderProps> = ({ onItemAdded, children }) => {
    return (
        <StyledDiv>
            <h1>{children}</h1>
            <NewItemTogglableForm onItemAdded={(newItem) => onItemAdded(newItem)} />
        </StyledDiv>
    );
};
