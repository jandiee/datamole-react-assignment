import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { RoundButton } from "./Button";
import { Form } from "./form";
import { ItemObjectType } from "./form/types";

type NewItemTogglableFormProps = {
    onItemAdded: (newItem: ItemObjectType) => void;
};

const NewItemTogglableForm = ({ onItemAdded }: NewItemTogglableFormProps) => {
    const [addingItem, setAddingItem] = useState(false);

    const toggleAddItem = () => {
        setAddingItem((prev) => !prev);
    };

    const addItem = async (data: string) => {
        const response = await fetch("http://localhost:3000/items", {
            method: "POST",
            body: JSON.stringify({ title: data, done: false }),
            headers: { "Content-Type": "application/json" },
        }).then((res) => res.json());
        onItemAdded(response);
    };

    return (
        <>
            {addingItem ? (
                <Form handleSubmit={(data) => addItem(data)} handleCancel={() => toggleAddItem()} initialValue="" />
            ) : (
                <RoundButton onClick={() => toggleAddItem()}>
                    <PlusIcon />
                </RoundButton>
            )}
        </>
    );
};

export default NewItemTogglableForm;
