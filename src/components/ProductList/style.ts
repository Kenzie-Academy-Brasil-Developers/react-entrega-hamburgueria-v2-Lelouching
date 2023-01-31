import styled from "styled-components";

export const ProductListStyle = styled.li`

    display: flex;
    flex-direction: column;
    min-width: 17.25rem;
    border-radius: var(--radius-2);
    border: 0.125rem var(--color-grey-100) solid;
    transition: 0.6s ease;

    & > div:nth-child(1){
        width: 100%;
        height: 9.375rem;
        background-color: var(--color-grey-0);
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            height: 100%;
            width: auto;
            object-fit: cover;
        }
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        h3{
            font-size: var(--font-size-3);
            font-weight: var(--weight-1);
            color: var(--color-grey-600);
        }

        span:nth-child(2){
            font-size: var(--font-size-6);
            font-weight: var(--weight-4);
            color: var(--color-grey-300);
        }

        span:nth-child(3){
            font-size: var(--font-size-5);
            font-weight: var(--weight-2);
            color: var(--color-primary);
        }
    }

    &:hover{
        border: 0.125rem var(--color-primary) solid;
        scale: 105%;

        & > div:nth-child(2) button{
            background-color: var(--color-primary);
            color: var(--color-grey-0);

            &:hover{
                background-color: var(--color-primary-hover);
            }
        }
    }
`