import styled from "styled-components";

export const InputStyle = styled.fieldset`

    position: relative;
    width: 100%;

    & > label{
        position: absolute;
        top: -25%;
        left: 1.80%;
        font-size: var(--font-size-6);
        font-weight: var(--weight-4);
        color: var(--color-grey-300);
        background-color: #FFF;
        padding: 0.1875rem 0.3125rem;
        border-radius: var(--radius-1);
    }

    & > input{
        width: 100%;
        font-size: var(--font-size-5);
        font-weight: var(--weight-4);
        background-color: var(--color-grey-0);
        border: none;
        border-radius: var(--radius-1);
        padding: 0.9375rem;

        ::placeholder{
            color: var(--color-grey-300);
        }

        :focus{
            background-color: #FFF;
        }
    }

    span{
        font-size: var(--font-size-6);
        font-weight: var(--weight-2);
        color: var(--color-negative);
    }

`