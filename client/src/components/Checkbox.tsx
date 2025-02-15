import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import styled from "styled-components";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
    all: unset;
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props) => `0 1px 3px 0 ${props.theme.colors.blackA7}`};
    opacity: ${(props) => (props.disabled ? "0.3" : 1)};
    &:hover {
        background-color: ${(props) => props.theme.colors.grass3};
        cursor: ${(props) => (props.checked ? "not-allowed" : "pointer")};
    }
    &:focus {
        box-shadow: 0 4px 6px -1px black;
    }
`;

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
    color: ${(props) => props.theme.grass11};
`;

export const Checkbox: React.FC<CheckboxProps> = (props) => (
    <StyledCheckbox {...props}>
        <StyledIndicator>
            <CheckIcon />
        </StyledIndicator>
    </StyledCheckbox>
);
