import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";
import { RectangleButton } from "./Button";
import { Checkbox } from "./Checkbox";

const Flexbox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const VisibleOnHoverFlexbox = styled(Flexbox)`
    display: none;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        ${VisibleOnHoverFlexbox} {
            display: flex;
        }
    }
`;

const Label = styled.label``;

export type LiteItemProp = CheckboxProps & {
    label: string;
    handleRemoval: () => void;
    handleEdit: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, ...checkboxProps }) => {
    return (
        <StyledDiv>
            <Flexbox>
                <Checkbox {...checkboxProps} />
                <Label>{label}</Label>
            </Flexbox>
            <VisibleOnHoverFlexbox>
                <RectangleButton onClick={() => handleRemoval()}>
                    <TrashIcon />
                </RectangleButton>
                <RectangleButton onClick={() => handleEdit()}>
                    <Pencil1Icon />
                </RectangleButton>
            </VisibleOnHoverFlexbox>
        </StyledDiv>
    );
};
