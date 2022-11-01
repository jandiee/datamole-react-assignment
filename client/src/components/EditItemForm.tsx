import { Form } from "./form";
import { ItemObjectType } from "./form/types";

type EditItemFormProps = {
    itemId: ItemObjectType["id"];
    onItemSubmitted: (item: ItemObjectType) => void;
    onCancel: () => void;
    initialValue: ItemObjectType["title"];
};

const EditItemForm = ({ itemId, onItemSubmitted, onCancel, initialValue }: EditItemFormProps) => {
    const submitItem = async (data: string) => {
        const response = await fetch(`http://localhost:3000/items/${itemId}`, {
            method: "PATCH",
            body: JSON.stringify({ title: data }),
            headers: { "Content-Type": "application/json" },
        }).then((res) => res.json());
        onItemSubmitted(response);
    };

    return (
        <Form handleSubmit={(data) => submitItem(data)} handleCancel={() => onCancel()} initialValue={initialValue} />
    );
};

export default EditItemForm;
