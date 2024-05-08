import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif; 
    }

    img { 
        display: block;
    }
    

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    } 

    button {
        background-color: transparent;
        cursor: pointer;
    }
`;