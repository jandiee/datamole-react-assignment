import { forwardRef } from "react";
import styled from "styled-components";
import { InputProps } from "./types";

const StyledInput = styled.input``;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ value, handleInputChange, ...props }, ref) => {
    return (
        <StyledInput
            ref={ref}
            value={value}
            onChange={(e) => {
                handleInputChange(e.currentTarget.value);
            }}
            {...props}
        />
    );
});
