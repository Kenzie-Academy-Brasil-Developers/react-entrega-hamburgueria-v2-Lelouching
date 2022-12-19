import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    :root{
        --color-primary: #27AE60;
        --color-primary-hover: #93d7af;
        --color-secondary: #EB5757;
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #E0E0E0;
        --color-grey-0: #F5F5F5;
        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-success: #168821;
        --color-information: #155bcb;

        --font-size-1: 1.625rem;
        --font-size-2: 1.375rem;
        --font-size-3: 1.125rem;
        --font-size-4: 1rem;
        --font-size-5: 0.875rem;
        --font-size-6: 0.75rem;

        --weight-1: 700;
        --weight-2: 600;
        --weight-3: 500;
        --weight-4: 400;

        --radius-1: 0.5rem;
        --radius-2: 0.25rem;

        body{
            width: 100%;
        }

        #root{
            width: 100%;
            height: 100vh;
            font-family: 'Inter', sans-serif;
        }

        .container{
            width: 95%;
            margin: 0 auto;
        }

        @media (min-width: 701px) {
            .container{
                width: 1200px;
                max-width: 100%;
                margin: 0 auto;
            }
        }
    }
`