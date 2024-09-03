import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #FFFFFF;
        color: #9F9F9F;
        -webkit-font-smoothing: antialiased;
        overflow-x:hidden;
    }


    body::-webkit-scrollbar{
        width: 5px;
        background-color: #E8E8E0;
    }

    body::-webkit-scrollbar-track{
        background-color: #E8E8E0;
    }

    body::-webkit-scrollbar-thumb{
        background-color: #4B5563;
        border-radius: 10px;
    }

    body, input, button, textarea{
        font-family: 'Poppins', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        color: #fff;
    }

    button:hover{
       filter: brightness(0.9);
       transition : 708ms;
        transform : translateY(-0px);
        border: solid 1px #F71963;
    }

    a:hover {
        transition : 600ms;
        transform: translateX(3px);
        color: #F71963;
    }
`;