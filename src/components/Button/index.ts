import styled, { css } from "styled-components";

interface iButtonProps{
    styledBtn: string,
    padding: string,
    width: string
}

const buttonColorVariable: any = {
    colorBrand: css`
        background-color: var(--color-primary);
        color: var(--color-grey-0);

        &:hover{
            background-color: var(--color-primary-hover);
        }
    `,
    colorGrey: css`
        background-color: var(--color-grey-100);
        color: var(--color-grey-300);

        &:hover{
            background-color: var(--color-grey-300);
            color: var(--color-grey-100);
        }
    `
}

const buttonPaddingVariable: any = {
    big: css`
        padding: 1.25rem;
    `,
    small: css`
        padding: 0.75rem 1.25rem;
    `,
    smaller: css`
        padding: 0.5rem 0.75rem;
    `
}

const buttonWidthVariable: any = {
    fit: css`
        width: fit-content;
    `,
    full: css`
        width: 100%;
    `
}

export const ButtonStyle = styled.button<iButtonProps>`

    font-size: var(--font-size-5);
    font-weight: var(--weight-2);
    border: none;
    border-radius: var(--radius-1);
    cursor: pointer;
    transition: 0.6s ease;
    
    ${({ styledBtn }) => buttonColorVariable[styledBtn]}
    ${({ padding }) => buttonPaddingVariable[padding]}
    ${({ width }) => buttonWidthVariable[width]}
`