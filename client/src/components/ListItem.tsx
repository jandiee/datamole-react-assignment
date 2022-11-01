import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { RectangleButton } from "./Button";
import { Checkbox } from "./Checkbox";
import EditItemForm from "./EditItemForm";
import { ItemObjectType } from "./form/types";

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
    item: ItemObjectType;
    onItemEdit: (item: ItemObjectType) => void;
    onItemDelete: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ item, onItemEdit, onItemDelete, ...checkboxProps }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/items/${item.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        onItemDelete();
    };

    const handleSubmit = (item: ItemObjectType) => {
        setIsEditing(false);
        onItemEdit(item);
    };

    return (
        <>
            {isEditing ? (
                <EditItemForm
                    itemId={item.id}
                    onItemSubmitted={(item) => handleSubmit(item)}
                    onCancel={() => setIsEditing(false)}
                    initialValue={item.title}
                />
            ) : (
                <StyledDiv>
                    <Flexbox>
                        <Checkbox {...checkboxProps} />
                        <Label>{item.title}</Label>
                    </Flexbox>
                    <VisibleOnHoverFlexbox>
                        <RectangleButton onClick={() => handleDelete()}>
                            <TrashIcon />
                        </RectangleButton>
                        <RectangleButton onClick={() => setIsEditing(true)}>
                            <Pencil1Icon />
                        </RectangleButton>
                    </VisibleOnHoverFlexbox>
                </StyledDiv>
            )}
        </>
    );
};
