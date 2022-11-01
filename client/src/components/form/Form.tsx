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

export const Form = ({ initialValue, handleSubmit, handleCancel }: FormProps): JSX.Element => {
    const [data, setData] = useState(initialValue || undefined);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        focusInput();
    }, []);

    const handleSubmitLocal = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit(data);
        setData(initialValue);
        focusInput();
    };

    const handleReset = () => {
        handleCancel();
        setData(initialValue);
    };

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <StyledForm onSubmit={(e) => handleSubmitLocal(e)} onReset={() => handleReset()}>
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
