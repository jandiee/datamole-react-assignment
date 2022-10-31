export type FormProps = {
    handleSubmit: (data: string) => void;
    handleCancel: () => void;
    initialValue: string;
};

export type InputProps = {
    value: FormProps["initialValue"];
    handleInputChange: (value: string) => void;
};

export type ItemObjectType = {
    title: string;
    done: boolean;
    createdAt: number;
    id: number;
};
