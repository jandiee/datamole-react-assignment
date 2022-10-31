import React from "react";
import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    round?: boolean;
};

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25px;
    min-width: 25px;
    cursor: pointer;
`;

const Button = ({ round, children, ...props }: ButtonProps) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
