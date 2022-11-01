import React from "react";

export type FormProps = {
    handleSubmit: (data: string | undefined) => Promise<void>;
    handleCancel: () => void;
    initialValue?: string;
};

export type InputProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
    value: FormProps["initialValue"];
    handleInputChange: (value: string) => void;
};

export type ItemObjectType = {
    title: string;
    done: boolean;
    createdAt: number;
    id: number;
};
