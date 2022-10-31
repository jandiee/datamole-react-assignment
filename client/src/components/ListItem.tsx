import React from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import Button from "./Button";

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Label = styled.label``;

const Flexbox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export type LiteItemProp = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => (
    <StyledDiv>
        <Flexbox>
            <Checkbox {...checkboxProps} />
            <Label>{label}</Label>
        </Flexbox>
        <Flexbox>
            <Button onClick={() => handleEdit()}>
                <TrashIcon />
            </Button>
            <Button onClick={() => handleRemoval()}>
                <Pencil1Icon />
            </Button>
        </Flexbox>
    </StyledDiv>
);
