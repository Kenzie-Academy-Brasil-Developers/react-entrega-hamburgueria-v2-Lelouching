import styled from "styled-components";

export const ProductCartStyle = styled.li`

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    background-color: #FFF;

    & > div{
        display: flex;
        gap: 1rem;
        height: 100%;

        div:nth-child(1){
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 1rem;
            background-color: var(--color-grey-100);
            border-radius: var(--radius-2);

            img{
                width: 2.8125rem;
                height: 2.8125rem;
            }
        }

        div:nth-child(2){
            display: flex;
            justify-content: space-between;
            height: 100%;

            h3{
                font-size: var(--font-size-4);
                font-weight: var(--weight-1);
                color: var(--color-grey-600);
            }
        }
    }

    & > img{
        width: 0.9375rem;
        height: 0.9375rem;
        cursor: pointer;
    }

`