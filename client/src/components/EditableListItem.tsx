import { useState } from "react";
import { Form } from "./form";
import { ItemObjectType } from "./form/types";
import { ListItem } from "./ListItem";

export type EditableListItemProps = {
    item: ItemObjectType;
    onItemDelete: () => void;
    onItemEdit: (item: ItemObjectType) => void;
};

const EditableListItem = ({ item, onItemEdit, onItemDelete }: EditableListItemProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/items/${item.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        onItemDelete();
    };

    const handleSubmit = async (data: string | undefined) => {
        const response = await fetch(`http://localhost:3000/items/${item.id}`, {
            method: "PATCH",
            body: JSON.stringify({ title: data }),
            headers: { "Content-Type": "application/json" },
        }).then((res) => res.json());
        onItemEdit(response);
        setIsEditing(false);
    };

    const handleMarkDone = async () => {
        const response = await fetch(`http://localhost:3000/items/${item.id}/mark-done`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
        }).then((res) => res.json());
        onItemEdit(response);
    };

    return (
        <>
            {isEditing ? (
                <Form handleSubmit={handleSubmit} handleCancel={() => setIsEditing(false)} initialValue={item.title} />
            ) : (
                <ListItem
                    label={item.title}
                    handleRemoval={() => handleDelete()}
                    handleEdit={() => setIsEditing(true)}
                    checked={item.done}
                    onCheckedChange={(checked) => {
                        if (checked) handleMarkDone();
                    }}
                    disabled={item.done}
                />
            )}
        </>
    );
};

export default EditableListItem;
