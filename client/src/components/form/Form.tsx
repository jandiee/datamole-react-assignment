import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { Input } from "./Input";
import { FormProps } from "./types";

const StyledForm = styled.form`
    display: flex;
    gap: 15px;
`;

export const Form = (props: FormProps): JSX.Element => {
    const [data, setData] = useState(props.initialValue);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        focusInput();
    }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.handleSubmit(data);
        setData(props.initialValue);
        focusInput();
    };

    const handleReset = () => {
        props.handleCancel();
        setData(props.initialValue);
    };

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <StyledForm onSubmit={(e) => handleSubmit(e)} onReset={() => handleReset()}>
            <Input ref={inputRef} value={data} handleInputChange={(value: string) => setData(value)} />
            <Button type={"submit"}>
                <CheckIcon />
            </Button>
            <Button type={"reset"}>
                <Cross1Icon />
            </Button>
        </StyledForm>
    );
};
