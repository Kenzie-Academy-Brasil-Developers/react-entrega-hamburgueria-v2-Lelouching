import styled from "styled-components";

export const CartStyle = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.5);
    z-index: 1;
    display: flex;
    justify-content: center;
    padding: 4.5rem 1rem 0 1rem;

    & > div{
        width: 31.25rem;
        max-width: 100%;

        & > div:nth-child(1){
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--color-primary);
            padding: 1rem;
            border-radius: var(--radius-2) var(--radius-2) 0 0;

            h3{
                font-size: var(--font-size-4);
                font-weight: var(--weight-1);
                color: #FFF;
            }

            span{
                font-size: var(--font-size-4);
                font-weight: var(--weight-1);
                color: var(--color-grey-0);
                cursor: pointer;
            }
        }

        & > div:nth-child(2){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 6.25rem;
            gap: 0.5rem;
            background-color: #FFF;
            border-radius: 0 0 var(--radius-2) var(--radius-2);

            h3{
                font-size: var(--font-size-3);
                font-weight: var(--weight-1);
                color: var(--color-grey-600);
            }

            span{
                font-size: var(--font-size-6);
                font-weight: var(--weight-4);
                color: var(--color-grey-300);
            }
        }

        & > section{
            display: flex;
            flex-direction: column;
            background-color: #FFF;
            border-radius: 0 0 var(--radius-2) var(--radius-2);
            padding: 1rem;

            & > ul{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding-bottom: 1.5rem;
            }

            & > div{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding-top: 1.5rem;
                border-top: 0.125rem var(--color-grey-100) solid;

                & > div{
                    display: flex;
                    justify-content: space-between;

                    & > span:nth-child(1){
                        font-size: var(--font-size-6);
                        font-weight: var(--weight-2);
                        color: var(--color-grey-600);
                    }

                    & > span:nth-child(2){
                        font-size: var(--font-size-6);
                        font-weight: var(--weight-2);
                        color: var(--color-grey-300);
                    }
                }
            }
        }
    }

`