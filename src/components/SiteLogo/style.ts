import styled from "styled-components";

export const SiteLogoStyle = styled.div`

    display: flex;
    flex-direction: column;
    width: 23.5625rem;
    max-width: 100%;
    gap: 2rem;

    & > h1{
        font-size: 2rem;
        font-weight: var(--weight-1);
        color: var(--color-grey-600);

            span{
                font-size: var(--font-size-3);
                color: var(--color-secondary);
            }
    }

    & > div{
        display: flex;
        align-items: center;
        padding: 1.5rem;
        gap: 1.5rem;
        border: 0.0625rem var(--color-grey-100) solid;
        border-radius: var(--radius-2);

            div{
                background-color: rgba(39, 174, 96, 0.1);
                border-radius: var(--radius-2);
                padding: 0.75rem 1rem;
            }
    }

    & > img{
        display: none;
        width: 11.375rem;
        max-width: 100%;
        height: 4.9375rem;
    }

    @media (min-width: 701px) {
        & > img{
            display: flex;
        }
    }
`