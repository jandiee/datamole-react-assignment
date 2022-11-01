import React from "react";
import styled from "styled-components";
import NewItemTogglableForm from "./NewItemTogglableForm";

export type HeaderProps = {
    children: React.ReactNode;
    // onItemAdded: (newItem: ItemObjectType) => void;
    handleAddItem: () => void;
};

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
`;

const StyledH2 = styled.h2`
    font-size: 1.25em;
    font-weight: 700;
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    return (
        <StyledDiv>
            <StyledH2>{children}</StyledH2>
            <NewItemTogglableForm onItemAdded={() => handleAddItem()} />
        </StyledDiv>
    );
};
