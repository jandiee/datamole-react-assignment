import React, { useState } from "react";
import styled from "styled-components";
import { FormProps } from "./types";
import { Input } from "./Input";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

const StyledForm = styled.form`
    display: flex;
`;

export const Form = (props: FormProps): JSX.Element => {
    const [data, setData] = useState(props.initialValue);

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit(data);
                setData(props.initialValue);
            }}
            onReset={() => {
                props.handleCancel();
                setData(props.initialValue);
            }}
        >
            <Input value={data} handleInputChange={(value: string) => setData(value)} />
            <button type={"submit"}>
                <CheckIcon />
            </button>
            <button type={"reset"}>
                <Cross1Icon />
            </button>
        </StyledForm>
    );
};
