import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RoundButton } from "../Button";
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await props.handleSubmit(data);
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
            <RoundButton type={"submit"}>
                <CheckIcon />
            </RoundButton>
            <RoundButton type={"reset"}>
                <Cross1Icon />
            </RoundButton>
        </StyledForm>
    );
};
