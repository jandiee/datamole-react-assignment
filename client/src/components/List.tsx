import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    padding-top: 15px;
    padding-left: 5px;
    padding-right: 5px;
    overflow: auto;
`;

export const List: React.FC<PropsWithChildren> = ({ children }) => <StyledDiv>{children}</StyledDiv>;
