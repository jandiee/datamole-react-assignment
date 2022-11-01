import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25px;
    min-width: 25px;
    cursor: pointer;
`;

export const DefaultButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export const RoundButton = styled(DefaultButton)`
    border-radius: 50%;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive9};
    background-color: ${(props) => props.theme.colors.grass9};
    color: #fff;
    width: 28px;
    height: 28px;
`;

export const RectangleButton = styled(DefaultButton)``;
