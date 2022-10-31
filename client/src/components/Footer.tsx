import React from "react";
import styled from "styled-components";

const StyledDiv = styled.footer`
    display: flex;
    justify-content: start;
    gap: 32px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

export type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};
export const Footer: React.FC<FooterProps> = ({ todoItems = 0, doneItems = 0 }) => (
    <StyledDiv>
        <div>Todo: {todoItems}</div>
        <div>Done: {doneItems}</div>
    </StyledDiv>
);
