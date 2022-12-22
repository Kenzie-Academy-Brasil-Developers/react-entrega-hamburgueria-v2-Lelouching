import styled from "styled-components";

export const HeaderStyle = styled.header`

    width: 100%;
    background-color: var(--color-grey-0);

    & > nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 5rem;
        gap: 1rem;
        padding: 1rem 0;
        height: fit-content;

        h1{
            font-size: var(--font-size-1);
            font-weight: var(--weight-1);
            color: var(--color-grey-600);
            span{
                font-size: var(--font-size-4);
                color: var(--color-secondary);
            }
        }

        div{
            display: flex;
            align-items: center;
            gap: 1.25rem;

            img{
                width: 1.5625rem;
                height: 1.5625rem;
                cursor: pointer;
            }

            form{

                position: relative;
                width: 100%;
                height: fit-content;
                border: 0.125rem solid var(--color-grey-100);
                border-radius: var(--radius-1);

                input{
                    width: 100%;
                    font-size: var(--font-size-5);
                    font-weight: var(--weight-4);
                    color: var(--color-grey-300);
                    background-color: #FFF;
                    border: none;
                    border-radius: var(--radius-1);
                    padding: 0.9375rem 4rem 0.9375rem 0.9375rem;

                    ::placeholder{
                        color: var(--color-grey-100);
                    }
                }

                button{
                    position: absolute;
                    top: 10%;
                    right: 3%;

                    img{
                        width: 1.15rem;
                        height: 1.15rem;
                    }
                }
            }

            div{
                position: relative;
                cursor: pointer;

                span{
                    position: absolute;
                    top: -20%;
                    right: -20%;
                    font-size: var(--font-size-6);
                    font-weight: var(--weight-1);
                    color: #FFF;
                    background-color: var(--color-primary);
                    padding: 0.10rem 0.25rem;
                    border-radius: var(--radius-1);
                }
            }
        }
    }

    @media (min-width: 701px) {
       & > nav{
        flex-direction: unset;
        gap: unset;
        padding: unset;

        & > div > form{
            width: 22.8125rem;
        }
       } 
    }
`