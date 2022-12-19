import styled from "styled-components";

export const RegisterStyle = styled.main`

    display: flex;
    flex-direction: column-reverse;
    gap: 1.5rem;
    padding-top: 2rem;
    width: 100%;

    & > form > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;

        h2{
            font-size: var(--font-size-3);
            font-weight: var(--weight-1);
            color: var(--color-grey-600);
        }

        a{
            font-size: var(--font-size-6);
            font-weight: var(--weight-3);
            color: var(--color-grey-300);
            text-decoration-line: underline;
        }
    }

    @media (min-width: 701px) {
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding-top: unset;
    }
`