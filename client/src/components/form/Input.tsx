import styled from "styled-components";
import { InputProps } from "./types";

const StyledInput = styled.input``;

export const Input = (props: InputProps): JSX.Element => {
    return (
        <StyledInput
            value={props.value}
            onChange={(e) => {
                props.handleInputChange(e.currentTarget.value);
            }}
        />
    );
};
