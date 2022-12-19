import styled from "styled-components";

export const FormStyle = styled.form`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 1.25rem;
    width: 100%;
    height: fit-content;
    border: 0.0625rem var(--color-grey-100) solid;
    border-radius: var(--radius-2);

    @media (min-width: 701px) {
        width: 31.25rem;
    }
`